const cp = require('child_process');
const path = require('path');
const os = require('os');

const NUMBER_OF_RUNS = 50;
const CONCURRENCY = 3;

function message(m) {
  console.log('------------------------');
  console.log(m);
  console.log('------------------------');
}

function cleanFolders() {
  cp.execSync(
    'rm -rf apps/crew/.next && rm -rf apps/flight-simulator/.next && rm -rf apps/navigation/.next && rm -rf apps/ticket-booking/.next && rm -rf apps/warp-drive-manager/.next'
  );
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
    { stdio: 'inherit' }
  );
}

message('prepping turbo');
// prep turbo
spawnSync('turbo', ['run', 'build', `--concurrency=${CONCURRENCY}`]);
// appears to be a bug in turbo where it only caches some tasks on the second run
// let's run it twice to make sure turbo is able to cache everything :)
spawnSync('turbo', ['run', 'build', `--concurrency=${CONCURRENCY}`]);

message('prepping nx');
// we don't have to run it twice :)
spawnSync('nx', ['run-many', '--target=build', '--all']);

message('prepping lage');
// we don't have to run it twice :)
spawnSync('lage', ['build', '--concurrency', CONCURRENCY]);


message(`running turbo ${NUMBER_OF_RUNS} times`);
const turboBefore = new Date();
for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
  // cleanFolders();
  const b = new Date();
  spawnSync('turbo', ['run', 'build', `--concurrency=${CONCURRENCY}`]);
  const a = new Date();
  console.log(`The command ran in ${a.getTime() - b.getTime()}ms`);
}
const turboAfter = new Date();
const averageTurboTime =
  (turboAfter.getTime() - turboBefore.getTime()) / NUMBER_OF_RUNS;

message(`running nx ${NUMBER_OF_RUNS} times`);
const nxBefore = new Date();
for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
  // cleanFolders();
  const b = new Date();
  spawnSync('nx', ['run-many', '--target=build', '--all']);
  const a = new Date();
  console.log(`The command ran in ${a.getTime() - b.getTime()}ms`);
}
const nxAfter = new Date();
const averageNxTime = (nxAfter.getTime() - nxBefore.getTime()) / NUMBER_OF_RUNS;

message(`running lage ${NUMBER_OF_RUNS} times`);
const lageBefore = new Date();
for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
  // cleanFolders();
  const b = new Date();
  spawnSync('lage', ['build', '--concurrency', CONCURRENCY]);
  const a = new Date();
  console.log(`The command ran in ${a.getTime() - b.getTime()}ms`);
}
const lageAfter = new Date();
const averageLageTime =
  (lageAfter.getTime() - lageBefore.getTime()) / NUMBER_OF_RUNS;

message('results');
console.log(`average turbo time is: ${averageTurboTime}`);
console.log(`average nx time is: ${averageNxTime}`);
console.log(`average lage time is: ${averageLageTime}`);
console.log(`nx is ${averageTurboTime / averageNxTime}x faster`);
console.log(`nx is ${averageLageTime / averageNxTime}x faster`);
