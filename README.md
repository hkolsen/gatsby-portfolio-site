# Bumped Marketing Site

The Bumped marketing site is a JAMStack standalone site built with [Gatsby](https://www.gatsbyjs.org/), [Netlify](https://www.netlify.com/) and [Netlify CMS](https://www.netlifycms.org/). JAM stands for **J**avascript **A**PI & **M**arkup.

## Gatsby

Gatsby is a Static Site Generator for React that allows you to query data from anywhere via GraphQL.

## Netlify CMS

Netlify CMS is an open source content management system for Git workflows. With Github permissions, it will read/write/edit markdown files saved under pages. Anytime an admin user makes changes to a page or section, Netlify CMS will create a new commit with the changes and merge into the `master` branch in the Github repository. This will then trigger the continuous deployment performed by Netlify.

To add/edit/delete fields in Netlify, navigate to the `config.yml` file under static/admin in the project code.

[Read more about Netlify CMS Configuration](https://www.netlifycms.org/docs/configuration-options/)

## Netlify

As mentioned previously, Netlify will start a deployment anytime a new change has been commited to the `master` branch.
