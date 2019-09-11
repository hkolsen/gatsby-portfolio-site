# A simple starter site for Gatsby

This is Gatsby site that leverages Netlify CMS for content editing. It is a great starting point to deploy a small personal site, or a foundation to scale for a project even larger.

## Is this the right project for you?

Before diving in, take a moment to see if the following scenarios apply. If not, it may be best to explore other options that will better fit your needs. If you know that this is right for you, [proceed to the quick start section](#to-get-started-with-this-project).

### I am building a site that non-engineers will need to edit content.

This site integrates seamlessly with [Netlify CMS](https://www.netlifycms.org/).

Netlify CMS is an open source content management system for Git workflows. With Github permissions, it will read/write/edit markdown files saved under pages. Anytime an admin user makes changes to a page or section, Netlify CMS will create a new commit with the changes and merge into the master branch in the Github repository. This will then trigger the continuous deployment performed by Netlify.

To add/edit/delete fields in Netlify, navigate to the `config.yml` file under `static/admin` in the project code.

([Read more about Netlify CMS Configuration](https://www.netlifycms.org/docs/intro/))

### I am most comfortable using a JavaScript framework, but am concerned about performance and accessibility.

This site is built with [Gatsby](https://www.gatsbyjs.org/), a static-site generator.

Gatsby is a free and open source framework based on React that helps developers build performant websites and apps, while proving out-of-the-box accessible components. Gatsby also allows developers to query data from anywhere via [GraphQL](https://www.graphql.com/).

([Learn more about how Gatsby works](https://www.gatsbyjs.org/docs/))

### I will be sharing the codebase with other developers.

This project uses [TypeScript](http://www.typescriptlang.org/), a statically typed superset of JavaScript.

Managing large Javascript codebases can be challenging. This is why more teams are adopting TypeScript to feel more confident when shipping code. A static type checker does not modify how your code behaves at runtime — instead it analyzes your code and attempts to infer types wherever possible, warning the developer before code ships.

([Get started with TypeScript](http://www.typescriptlang.org/samples/index.html))

## If none of the above apply, consider the following:

- **HTML + CSS:** It is difficult to beat the performance of a static HTML and CSS site. Now its even easier to create dynamic and fully accessible layouts. Check out [CSS Grid by Example](https://gridbyexample.com/) and [Every Layout](https://every-layout.dev) for inspiration.
- **[Eleventy](https://www.11ty.io/):** A simple static-site generator. Ther are plenty of starter projects that integrate with multiple template languages. The community is very supportive and growing by the day.

## To get started with this project:

Clone the project to your local development environment:

```
git clone git@github.com:hkolsen/gatsby-portfolio-site.git
```

Run Yarn in the console to install all dependencies:

```
yarn
```

Once complete, run the following to preview locally:

```
yarn start
```

To build the project and serve on your local server:

```
yarn build && yarn serve
```

## Roadmap:

- Light and Dark Mode
- Create consistent components as part of a larger design system
- Enhance UX with animations and `prefers-reduced-motion` query
- Move from single-page to multiple-pages
- Screenshot testing
