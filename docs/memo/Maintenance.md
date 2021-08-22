# Maintain the homepage

My homepage uses the [vuepress-homepage](https://github.com/mtobeiyf/vuepress-homepage) template. 

---

## Daily Maintenance

- Edit the md files in `docs`
- Build 

```bash  
yarn run build
```
- Deploy to Github

```bash
deploy.sh
```

----------
## Prerequisites

### Git-hub branch problem

- Fork the [vuepress-homepage](https://github.com/mtobeiyf/vuepress-homepage) template and change its default branch name from 'master' to 'main'.  
- Set the default brach on `git init` command as

```bash
git config --global init.defaultBranch main
```

Refer to [here](https://www.seancdavis.com/blog/git-set-default-branch/) for the brach problem of Github.

- [Node.js](https://nodejs.org)**>=8.0.0**.

Download and install it with default options.

- [Yarn](https://yarnpkg.com)

```bash
npm install -g yarn
```

Check by running commands: `node --version`, `npm --version` and `yarn --version`

### Get the repo

Download on GitHub: `Clone or download` -> `Download ZIP`

or clone it

```bash
$ git clone git@github.com:liangyuxuan1/vuepress-homepage.git
```
## Configure and run locally

```bash
# Get into the directory
$ cd vuepress-homepage 

# Install dependencies
$ yarn # or npm install

# Run under developing
$ yarn run dev # or npm run dev
```

Now open the browser and go to `127.0.0.1:8080`


## Build

To generate the homepage as a static site, run:

```bash
$ yarn run build
``` 

This will build the site under the `dist` directory.

## Deploy to Github

Create `deploy.sh` with the following content and run it to deploy.

```bash
#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:liangyuxuan1/liangyuxuan1.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

For more available instructions, have a look at the [Deploying](https://vuepress.vuejs.org/guide/deploy.html#deploying) section.



