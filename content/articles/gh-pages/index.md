---
title: Automate your GitHub Pages deployment using Actions
description: GitHub provides a free public static webpage hosting using the GitHub servers. It also provides a free domain by the name of username.github.io. You can automate the deployment using GitHub Actions easily. In this article, we will learn how to deploy the site build by a static site generator named Gatsby.
image: preview.png
author: rahulsharma
date: 2020-12-19
template: article
tags:
    - github
    - web
---

## GitHub Pages

GitHub Pages are public web pages hosted by [GitHub](https://github.com/). It also provides a free domain `username.github.io`. For example, this site is hosted on `rahulsrma26.github.io` because my username is `rahulsrma26`. 

Steps to host using the free domain are:

1. Create a repository named `username.github.io`
2. Put all the static web content including `index.html` in the `master` branch

If you face any difficulty following that then you can visit the official [GitHub pages](https://pages.github.com/) site or [official guide](https://guides.github.com/features/pages/).

Why do I choose a static site? Find it [here](/articles/static-site).

---

## GitHub Actions

[Github Actions](https://github.com/features/actions) is a feature provided by GitHub to automate workflow. A user can specify their workflow that can run on any GitHub event. It is a popular feature for CI/CD. A user can build, test, and deploy the code right from GitHub. More can be learned on Github [Action's site](https://github.com/features/actions).

To use actions you first need to create a directory

```bash
mkdir -p .github/workflows/
```

A workflow can be specified using a YAML file in this directory.

---

## Build and Deploy

If we want to use a static site generator that generates static pages from code/script (like [Gatsby](https://www.gatsbyjs.com/)). Then we need to save our code elsewhere. We can either save our code in a separate repository or in a separate branch. Since it's easier to manage a single repository, we can create a `dev` branch for all the code as the `master` branch is reserved for the deployment. 

To create the workflow we can create `deploy.yml` file in the `.github/workflows/` directory.

```yml
# Name of the workflow
name: github pages deployment

# Controls when the action will run. Triggers the workflow on 
# push or pull request events but only for the dev branch
on:
  push:
    branches: [ dev ]
  pull_request:
    branches: [ dev ]

# Specifies what to run on the trigger
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    # first we need to checkout the repo
    # if dev brach is not the default branch
    # then you can specify the branch with 'ref'
    - uses: actions/checkout@v2
    # then setup nodejs on the machine
    - uses: actions/setup-node@v1
      with:
        node-version: '12'
    
    # then we need to install our static site generator
    - run: npm install -g gatsby-cli
    # doing clean install
    - run: npm ci
    
    # Building the site (static web pages)
    - name: Gatsby Build
      run: gatsby build

    # Copy all files from the build folder to the master branch
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
        publish_branch: master  # deploying branch
```

This will build and update your site whenever you push anything in the `dev` branch. If you want to restrict the deployment trigger on some specific files like `version.txt` or something like that, then you can modify the on push option.

```yml
on:
  push:
    paths:
    - '**version.txt'
```

This can be helpful in deploying a package to the hosting server. Like building and uploading a python package to a PyPI server, whenever there is a version update. I hope this article sheds some light on the capabilities of actions.
