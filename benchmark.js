const cp = require('child_process');

const NUMBER_OF_RUNS = 50

function message(m) {
    console.log("------------------------")
    console.log(m)
    console.log("------------------------")
}

function cleanFolders() {
    cp.execSync("rm -rf apps/crew/.next && rm -rf apps/flight-simulator/.next && rm -rf apps/navigation/.next && rm -rf apps/ticket-booking/.next && rm -rf apps/warp-drive-manager/.next")
}


message('prepping turbo')
// prep turbo
cp.execSync('npx turbo run build --concurrency=3');
// appears to be a bug in turbo where it only caches some tasks on the second run
// let's run it twice to make sure turbo is able to cache everything :)
cp.execSync('npx turbo run build --concurrency=3');

message('prepping nx')
// we don't have to run it twice :)
cp.execSync('npx nx run-many --target=build --all');

message(`running turbo ${NUMBER_OF_RUNS} times`)
const turboBefore = new Date()
for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
  // cleanFolders();
  const b = new Date()
  cp.execSync('npx turbo run build --concurrency=3', { stdio: [0, 1, 2] });
  const a = new Date()
  console.log(`The command ran in ${a.getTime() - b.getTime()}ms`)
}
const turboAfter = new Date()
const averageTurboTime = (turboAfter.getTime() - turboBefore.getTime()) / NUMBER_OF_RUNS

message(`running nx ${NUMBER_OF_RUNS} times`)
const nxBefore = new Date()
for (let i = 0; i < NUMBER_OF_RUNS; ++i) {
  // cleanFolders();
  const b = new Date()
  cp.execSync('npx nx run-many --target=build --all', { stdio: [0, 1, 2] });
  const a = new Date()
  console.log(`The command ran in ${a.getTime() - b.getTime()}ms`)
}
const nxAfter = new Date()
const averageNxTime = (nxAfter.getTime() - nxBefore.getTime()) / NUMBER_OF_RUNS

message('results')
console.log(`average turbo time is: ${averageTurboTime}`)
console.log(`average nx time is: ${averageNxTime}`)
console.log(`nx is ${averageTurboTime / averageNxTime} faster`)