# Green Shirt Studio

A site to promote a Chicago Acting School

## Tech Stack

Built with:

- Gatsby
- Wordpress
- Stripe

https://www.figma.com/file/YM8cUHJTmB8UChN81gmXSR/Green-Shirt-Studio?node-id=209%3A515

### Run Locally

To run locally run `ntl dev`. Note that if you just use `npm start` the stripe functions will not work.

.env file is stored on Notion. Place it in the root folder titled ".env.development"

## Gatsby

Gatsby is a static site generator built on React. When changes are pushed to the main branch of the repo, github will trigger Netlify to make a new build of the site.

The site will then query Wordpress and build all the instructor, blog and class pages.

## Wordpress

The original Green Shirt Studio site was built entirely in Wordpress. So now we just use that same site as a backend for the Gatsby front end.

There are 4 pieces of tech that make this possible.

### WP Gatsby

There is a Wordpress Plugin that sets up the Wordpress Environment to send data to a Gatsby front end.

### Wordpress Gatsby Source Plugin

There is a corresponding Gatsby plug-in that is installed on the front end and this works with the previous plugin to ensure data goes from Wordpress to Gatsby.

### WP GraphQL

Gatsby relies heavily on GraphQL to get data to display. WP Graphql is a Wordpress Plugin that exposes all of it's posts and pages to the GraphQL API. This includes a GraphQL playground, but the frontend playground should be used for more accurate queries `/__graphql`

### WP GraphQL for Advanced Custom Fields

With Advanced Custom Fields, the site utilizes custom data types, and this plugin exposes those fields to GraphQL.

## Dataflow

1. Data is entered on the Wordpress Backend.
2. A build is triggered either through a webhook, changes pushed to the main branch, or a plugin coudld trigger the build if set up
3. Netlify builds the static pages and hosts them on their CDN
4. Users can see the data when visiting the site after the pages build

## Spots left

Currently there is one point where client side rendered Data comes into play. For the class pages, the "Spots Left" field queries the Wordpress Rest API to get the results.

## Netlify Functions

The site makes use of Netlify functions to handle server side operations.

## Stripe Integration

Requires Netlify CLI
run `ntl dev` to run locally with the locally with netlify functions
