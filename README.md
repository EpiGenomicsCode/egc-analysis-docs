# EGC Analysis Documentation Website

https://EpigenomicsCode.github.io/egc-analysis-docs (may not be deployed yet)

## Dependencies
Docusaurus is powered by [NodeJS](https://nodejs.org/en). You can set it up with the following [conda](https://anaconda.org/conda-forge/nodejs) command:
```
conda create -n docusaurus -c conda-forge nodejs
```
After creating the environment above (do this once per machine), you can activate the environment anytime using
```
conda activate docusaurus
```

## Docusaurus Instructions

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. Use the following commands from within the repo directory (`cd /your/path/to/egc-analysis-docs`).

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
