# Rahul Sharma's personal website

![github pages](https://github.com/rahulsrma26/rahulsrma26.github.io/workflows/github%20pages/badge.svg)

This is my personal blog. Currently hosted on [rahulsrma26.github.io](https://rahulsrma26.github.io/).

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Local development (Docker only, no Node on the host)

```sh
docker compose up                              # live preview at http://localhost:3000
docker compose run --rm site npm run build     # production build, same as CI
docker compose run --rm site npx eslint "src/**/*.js"
docker compose run --rm site npx prettier --write src/
```

Or open the folder in VS Code and choose "Reopen in Container".

## Deploying

Pushing to `dev` builds the site and publishes `build/` to the `master` branch
([Deploy to Github Pages](https://pages.github.com/)). Pull requests into `dev` are built but not deployed.

## Maintenance

Dependabot opens grouped update PRs once a month (npm packages, GitHub Actions, and the
Node Docker image). If the PR's build is green, merge it. Major version bumps come as
separate PRs and may need code changes.

## Future work

- [ ] Supporting `sass` as primary styler
