const cp = require('child_process');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);
const noDaemon = args.includes('no-daemon');
const TOOLS = ['turbo', 'nx', 'lage'];
const selectedTools = args.filter(a => TOOLS.includes(a));
const tools = selectedTools.length ? selectedTools : TOOLS;

const NUMBER_OF_RUNS = 10;

function message(m) {
  console.log('------------------------');
  console.log(m);
  console.log('------------------------');
}

function cleanFolders() {
  // uncomment this to remove all artifacts after every run
  // cp.execSync(
  //   'rm -rf apps/crew/.next && rm -rf apps/flight-simulator/.next && rm -rf apps/navigation/.next && rm -rf apps/ticket-booking/.next && rm -rf apps/warp-drive-manager/.next'
  // );
}

function spawnSync(cmd, args) {
  return cp.spawnSync(
    path.join(
      '.',
      'node_modules',
      '.bin',
      os.platform() === 'win32' ? cmd + '.cmd' : cmd
    ),
    args,
    {
      stdio: 'inherit',
      env: {
        ...process.env,
        NX_TASKS_RUNNER_DYNAMIC_OUTPUT: 'false',
        NX_DAEMON: !noDaemon,
      },
    }
  );
}

if (noDaemon) {
  message('Running without daemons');
}

const turboArgs = ['run', 'build', `--concurrency=10`];
if (noDaemon) {
  turboArgs.push('--no-daemon');
}

const toolConfig = {
  turbo: { prepArgs: turboArgs, runArgs: turboArgs },
  nx: {
    prepArgs: ['run-many', '-t', 'build'],
    runArgs: ['run-many', '-t', 'build', '--parallel', 10],
  },
  lage: {
    prepArgs: ['build', '--concurrency', 3],
    runArgs: ['build', '--concurrency', 10],
  },
};

const averages = {};
for (const tool of tools) {
  const { prepArgs, runArgs } = toolConfig[tool];
  message(`prepping ${tool}`);
  spawnSync(tool, prepArgs);

  message(`running ${tool} ${NUMBER_OF_RUNS} times`);
  let total = 0;
  for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
    cleanFolders();
    const b = new Date();
    spawnSync(tool, runArgs);
    const a = new Date();
    total += a.getTime() - b.getTime();
    console.log(`The command ran in ${a.getTime() - b.getTime()}ms`);
  }
  averages[tool] = total / NUMBER_OF_RUNS;
}

message('results');
for (const tool of tools) {
  console.log(`average ${tool} time is: ${averages[tool]}`);
}

if (averages.nx && averages.lage) {
  console.log(`nx is ${(averages.lage / averages.nx).toFixed(2)}x faster than lage`);
}
if (averages.nx && averages.turbo) {
  console.log(`nx is ${(averages.turbo / averages.nx).toFixed(2)}x faster than turbo`);
}
