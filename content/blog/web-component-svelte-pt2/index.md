---
title: Building a web component with Svelte (pt2)
date: "2021-11-09T22:12:03.284Z"
description: "Svelte Web Components - building out the project"
draft: true
---

Now that we have our basic project scaffolded out, we can make a start.

First, we need to tidy up the initial files the svelte script gave us:

* Remove `routes` directory
* Remove `app.html` from `./src`
* Create `App.svelte` and `main.ts` in `./src`
* Create a `public` directory and add an `index.html` file

We now have the filestructure needed to create a very simple custom element! Next we need to tell the Svelete compiler to output a custom element rather than a svelet app.

To do this, open `svelte.config.js` modify the `config` object, adding a new `compilerOptions` property:
```
  const config = {
      // stuff
        compilerOptions: {
            customElements: true,
        },
      // more stuff
  }
```

Remove whatever is in the `kit` property and fill with:

```
kit: {
    files: {
        template:
    }
}
```

Now, we can add a basic component and render it in `index.html`.

In `App.svelte`, add the following code:

```
<!-- The "tag" property here is what we use render our element in HTML -->
<svelte:options tag="my-component" />

<script lang="ts">
	let count: number = 0;
	const increment = () => {
		count += 1;
	};
</script>

<button on:click={increment}>
	Clicks: {count}
</button>
```

We will be rendering a simple button & counter to prove that our component will render.

Add this code to `./src/main.ts`:
```
export { default as App } from './App.svelte';
```

Next, add the following to `./public/index.html`:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Spotify Top Artists</title>
  </head>
  <body>
    <my-component></my-component>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```