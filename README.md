# Portfolio Site

IRL, a site of this scope would not require more than HTML and CSS, but hypothetically this is the foundation to a larger site with content editors ([Netlify CMS](#netlify-cms)), multiple engineers ([TypeScript](#typescript)) and would need to be statically rendered to reduce performance and security implications with using a standalone React app ([Gatsby](#gatsby)). The site is continously deployed through [Netlify](#netlify)).

## Netlify CMS

Netlify CMS is an open source content management system for Git workflows. With Github permissions, it will read/write/edit markdown files saved under pages. Anytime an admin user makes changes to a page or section, Netlify CMS will create a new commit with the changes and merge into the master branch in the Github repository. This will then trigger the continuous deployment performed by Netlify.

To add/edit/delete fields in Netlify, navigate to the config.yml file under static/admin in the project code.

Read more about Netlify CMS Configuration

## TypeScript

Typescipt provides safe typing across your project.

## Gatsby

Gatsby is a Static Site Generator for React that allows you to query data from anywhere via GraphQL.

## Netlify

As mentioned previously, Netlify will start a deployment anytime a new change has been commited to the master branch.
