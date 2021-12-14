# Large Next.js Monorepo

Repo contains:

1. 5 shared buildable packages/libraries with 250 components each
2. 5 Next.js applications built out of 20 app-specific libraries. Each app-specific lib has 250 components each. Each library uses the shared components.

Combined there are about 26k components.

Currently it is configured to simply use npm workspaces and so you can build all the apps by running:

```sh
npm run build --workspaces --if-present
```

Or build an individual one, such as `crew`, by running:

```sh
npm run build --workspace=crew
```
