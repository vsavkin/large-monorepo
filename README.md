# Benchmarking Nx, Turbo, and Lage

Recording:

![nx-turbo-recording](./readme-assets/turbo-nx-perf.gif)

Repo contains:

1. 5 shared buildable packages/libraries with 250 components each
2. 5 Next.js applications built out of 20 app-specific libraries. Each app-specific lib has 250 components each. Each
   library uses the shared components.

Combined there are about 26k components. It's a lot of components, but they are very small. This corresponds to a medium
size enterprise repo. A lot of our clients have repos that are 10x bigger than this, so this repo isn't something out or
ordinary. And, the bigger the repo, the bigger the difference in performance between Nx and Turbo.

The repo has Nx, Turbo, and Lage enabled. They don't affect each other. You can remove one without affecting the
other one.

## Benchmark & Results (February 12th, 2025)

`npm run benchmark` runs the benchmark. The following numbers produced by an M2Max MBP on macOS 14 (Sonoma). On a Windows machine all the tools will get slower, and the delta between Nx and Turbo/Lage will get bigger.

- **average lage time is: 1258.6**
- **average turbo time is: 1432.4**
- **average nx time is: 191.7**
- **nx is 6.57x faster than lage**
- **nx is 7.47x faster than turbo**

### Why is Nx faster than Turbo

Nx uses several optimizations to minimize the amount of computation required. For instance, it stores information about
the repository on disk to be able to recompute only what is needed. It runs a daemon process that gets all the necessary
data structures ready before the developer invokes a command. And the data structures are updated incrementally, usually
in just a few milliseconds. 

Although Nx plugins use Node.js, the performance sensitive parts of Nx are written in Rust.

### Does this performance difference matter in practice?

The cache restoration Turborepo provides is likely to be fast enough for a lot of small and mid-size repos.
What matters more is the ability to distribute any command across say 50 machines while
preserving the dev ergonomics of running it on a single machine. Nx can do it. Bazel can do it (which Nx
borrows some ideas from). Turbo can't. This is where the perf gains are for larger repos.
See [this overview](https://nx.dev/ci/features/distribute-task-execution) and [this benchmark](https://github.com/vsavkin/interstellar) to learn more.

## Dev ergonomics & Staying out of your way

When some folks compare Nx and Turborepo, they say something like "Nx may do all of those things well, and may be
faster, but Turbo is built to stay out of you way". Let's talk about staying out of your way:

Run `nx build crew --skip-nx-cache` and `turbo run build --scope=crew --force`:

![terminal outputs](./readme-assets/turbo-nx-terminal.gif)

Nx doesn't change your terminal output. Spinners, animations, colors are the same whether you use Nx or not. 
What is also important is that when you restore things from cache, Nx will
replay the terminal output identical to the one you would have had you run the command.

Examine Turbo's output: no spinners, no animations, no colors. Pretty much anything you run with Turbo looks different (
and a lot worse, to be honest) from running the same command without Turbo.

A lot of Nx users don't even know they use Nx, or even what Nx is. Things they run look the same, they just got faster.

## Found an issue? Send a PR.

If you find any issue with the repo, with the benchmark or the setup, please send a PR. The intention isn't to cherry
pick some example where Turbo doesn't do well because of some weird edge case. If it happens that the repo surfaces some
edge case with how turbo works, send a PR, and let's fix it. We tried to select the setup that Turbo should handle
well (e.g., Next.js apps). The repo doesn't use any incrementality which Nx is very good at. We did our best to make it
fair.
