# Decently Dressed Developer
This is the source code for [the Decently Dressed Developer](https://decentlydresseddeveloper.com).  It uses [Gatsby](https://www.gatsbyjs.org) to generate a static website from React components.

## Development

You will need node version 8.3+ installed.

First, install dependencies with NPM: 
```
npm i
```

Create an env file, using the example as a template:
```
cp .env.example .env
```

Run the project in development mode:
```
npm run develop
```

Whilst running in development mode, gennrate a GraphQL schema.json file:
```
npm run graphql-schema 
```

Once the schema has been generated, Typescript types for queries can be generated:
```
npm run graphql-queries
```

Typechecking can be performed with `npm run typecheck`.  Make sure the generated query types are up to date or this will fail.

Linting can be performed with `npm run lint`.

## Building

The generated site will be built into the `public` directory by running the build command:
```
npm run build
```

This is just static HTML/JS/CSS so can be served by any web server.  To easily run the production website:
```
npm start
```

## Deploy

https://decentlydresseddeveloper.com is hosted by Netlify, which automatically deploys whenever anything is pushed to master.  It's possible to deploy a copy of the site to Netlify with the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Cowbacca/decently-dressed-developer)
