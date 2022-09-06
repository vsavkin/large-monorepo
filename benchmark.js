const cp = require('child_process');
const path = require('path');
const os = require('os');

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
    { stdio: 'inherit', env: { ...process.env, NX_TASKS_RUNNER_DYNAMIC_OUTPUT: 'false' } }
  );
}




message('prepping turbo');
// prep turbo
spawnSync('turbo', ['run', 'build', `--concurrency=3`]);
// appears to be a bug in turbo where it only caches some tasks on the second run
// let's run it twice to make sure turbo is able to cache everything :)
spawnSync('turbo', ['run', 'build', `--concurrency=3`]);

message(`running turbo ${NUMBER_OF_RUNS} times`);
let turboTime = 0;
for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
  cleanFolders();
  const b = new Date();
  spawnSync('turbo', ['run', 'build', `--concurrency=10`]);
  const a = new Date();
  turboTime += a.getTime() - b.getTime();
  console.log(`The command ran in ${a.getTime() - b.getTime()}ms`);
}
const averageTurboTime = turboTime / NUMBER_OF_RUNS;

message('prepping nx');
// we don't have to run it twice :)
spawnSync('nx', ['run-many', '--target=build', '--all']);

message(`running nx ${NUMBER_OF_RUNS} times`);
let nxTime = 0;
for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
  cleanFolders();
  const b = new Date();
  spawnSync('nx', ['run-many', '--target=build', '--all', '--parallel', 10]);
  const a = new Date();
  nxTime += a.getTime() - b.getTime();
  console.log(`The command ran in ${a.getTime() - b.getTime()}ms`);
}
const averageNxTime = nxTime / NUMBER_OF_RUNS;

message('prepping lerna');
spawnSync('lerna', ['run', 'build', `--concurrency=3`]);
message(`running lerna ${NUMBER_OF_RUNS} times`);
let lernaTime = 0;
for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
  cleanFolders();
  const b = new Date();
  spawnSync('lerna', ['run', 'build', `--concurrency=10`]);
  const a = new Date();
  lernaTime += a.getTime() - b.getTime();
  console.log(`The command ran in ${a.getTime() - b.getTime()}ms`);
}
const averageLernaTime = lernaTime / NUMBER_OF_RUNS;


message('prepping lage');
spawnSync('lage', ['build', '--concurrency', 3]);

message(`running lage ${NUMBER_OF_RUNS} times`);
let lageTime = 0;
for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
  cleanFolders();
  const b = new Date();
  spawnSync('lage', ['build', '--concurrency', 10]);
  const a = new Date();
  lageTime += a.getTime() - b.getTime();
  console.log(`The command ran in ${a.getTime() - b.getTime()}ms`);
}
const averageLageTime =
    lageTime / NUMBER_OF_RUNS;

message('results');
console.log(`average lage time is: ${averageLageTime}`);
console.log(`average turbo time is: ${averageTurboTime}`);
console.log(`average lerna (powered by nx) time is: ${averageLernaTime}`);
console.log(`average nx time is: ${averageNxTime}`);

console.log(`nx is ${averageLageTime / averageNxTime}x faster than lage`);
console.log(`nx is ${averageTurboTime / averageNxTime}x faster than turbo`);
console.log(`nx is ${averageLernaTime / averageNxTime}x faster than lerna (powered by nx)`);
