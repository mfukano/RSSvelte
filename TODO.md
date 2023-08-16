# What is this?

This is a simple full-stack implementation of the [RSS feed reader website from Codementor DevProjects](https://www.codementor.io/projects/web/rss-feed-reader-website-atx32j280x).

Currently, the Vite server can be run (via `npm run dev`) and the RSS feed XML can be read via the AllOrigins proxy that the RSS link feeds through in
the index +page.svelte.

It's my first touch with building a project using Svelte (pretty cool btw, reminds me of how you structure Vue projects).

# TO-DO:
- Begin working through XML parsing after the feed is retrieved
    - Can Vite projects utilize simple TS libraries and modules in the same ways?
- Wire up the src/lib/components/Article.svelte component once the RSS articles are parsable from XML.
    - Initial formatting should already be created.
- Stylize pages and components.
