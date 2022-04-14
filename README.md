# Benchmarking Nx and Turbo (and Lage)

Recording:

![nx-turbo-recording](./readme-assets/turbo-nx-perf.gif)

Repo contains:

1. 5 shared buildable packages/libraries with 250 components each
2. 5 Next.js applications built out of 20 app-specific libraries. Each app-specific lib has 250 components each. Each library uses the shared components.

Combined there are about 26k components. It's a lot of components, but they are very small. This corresponds to a medium size enterprise repo. A lot of our clients have repos that are 10x bigger than this, so this repo isn't something out or ordinary. And, the bigger the repo, the bigger the difference in performance between Nx and Turbo.

The repo has both Nx and Turbo enabled. They don't affect each other. You can remove one without affecting the other one.


## Benchmarking it (April 14, 2022)

Run `npm run benchmark`. The benchmark will warm the cache of both Turbo and Nx. We benchmark how quickly Turbo/Nx can figure out what needs to be restored from the cache and restores it.

These are the numbers using the latest MBP machine (April 14 version):
- average turbo time is: 3383.8 
- average nx time is: 237.7
- average lage time is: 3732
- nx is 14.235591081194785x faster than Turbo
- nx is 15.700462768195205x faster than Lage


### Why is Nx faster than Turbo

Nx is in many ways akin to React in that it's doing tree diffing when restoring files from the cache. If the right files are in the right place, Nx won't touch them. Turbo blows everything away every time. Nx's version isn't just faster, it's also more useful (again similarly to tree diffing in React). Blowing everything away on every restoration means that if any tools watch the folders (which is common when you build large apps or build microfrontends), they are going to get confused or triggered for no reason. This is similar to how recreating the DOM from scratch isn't just slower, but results in worse UX.

If you remove the folders before every invocation (Nx will have to recreate all the folders the same way, so its smartness doesn't help it), Nx is still 4.5 times faster than Turbo. So depending on the state of your repo invoking Nx will be from 4.5 times to 14.2 times faster than invoking Turbo (on a mac).

Is Nx always faster? No. Nx uses Node.js, so it takes about 70ms (on a mac) to boot, regardless of what you do. You build 1000 projects, takes 70ms. You build 1 project, it takes 70ms. If you have a repo with say 10 files in it, running Turbo will likely be faster because it boots faster.

Yarn, npm, pnpm have a similar boot time to Nx, and folks don't mind. And, of course, it's worth asking whether a high-performance build tool is even required for a repo with 10 files in it.


### Does this performance difference matter in practice?

The cache restoration Turborepo (or Lage) provides is likely to be fast enough for a lot of repos (it's plenty fast). What matters for larger repos like this one is the ability to distribute any command across say 50 machines while preserving the dev ergonomics of running it on a single machine. Nx can do it. Bazel can do it (which Nx borrows some ideas from). Turbo can't. This is where the perf gains are for larger repos. See [this benchmark](https://github.com/vsavkin/interstellar) to learn more.


## Dev ergonomics & Staying out of your way

When some folks compare Nx and Turborepo, they say something like "Nx may do all of those things well, and may be faster, but Turbo is built to stay out of you way". Let's talk about staying out of your way:

Run `nx build crew --skip-nx-cache` and `turbo run build --scope=crew --force`:

![terminal outputs](./readme-assets/turbo-nx-terminal.gif)

Nx doesn't change your terminal output. Spinners, animations, colors are the same whether you use Nx or not (we instrument Node.js to get this result). What is also important is that when you restore things from cache, Nx will replay the terminal output identical to the one you would have had you run the command.

Examine Turbo's output: no spinners, no animations, no colors. Pretty much anything you run with Turbo looks different (and a lot worse, to be honest) from running the same command without Turbo.

A lot of Nx users don't even know they use Nx, or even what Nx is. Things they run look the same, they just got faster.


## Found an issue? Send a PR.

If you find any issue with the repo, with the benchmark or the setup, please send a PR. The intention isn't to cherry pick some example where Turbo doesn't do well because of some weird edge case. If it happens that the repo surfaces some edge case with how turbo works, send a PR, and let's fix it. We tried to select the setup that Turbo should handle well (e.g., Next.js apps). The repo doesn't use any incrementality which Nx is very good at. We did our best to make it fair.
