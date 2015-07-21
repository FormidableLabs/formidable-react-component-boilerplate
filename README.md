[![Travis Status][trav_img]][trav_site]


React Component Boilerplate
===========================

Formidable Labs flavored React component boilerplate. This is a set of opinions on how to start a React component.

## Make it yours!

The top level component in this boilerplate repo is called `BoilerplateComponent`. You probably want to change that. Remember to update `src/index.js`, `webpack.config.js`, and `webpack.config.dev.js`to reflect your naming changes!

## The Generator

We expect these opinions to change *often*.  We've written a yeoman generator to pull down the freshest copy of this repo whenever you use it.  It just copies this repo so you don't have to. Check it out [here](https://github.com/FormidableLabs/generator-formidable-react-component)

## Build

Build for production use (NPM, bower, etc).

```
$ npm run build
```

Which is composed of commands to create `dist` UMD bundles (min'ed, non-min'ed):

```
$ npm run build-dist
```

and the ES5 `lib`:

```
$ npm run build-lib
```


## Development

Run the `demo` application in a browser window with hot reload:
(More CPU usage, but faster, more specific updates)

```
$ npm run demo
```

Run the `demo` application with watched rebuilds, but not hot reload:

```
$ npm run demo-dev
```

## Quality

Here's what CI (and you) should check:

```
$ npm run check
```

Which is comprised of:

```
$ npm run lint
$ npm run test
```

**NOTE - COMING SOON!**: Actual tests ;)

## When releasing

Publish with:

```
$ npm publish
```

Which under the hood runs the checks and webpack builds:

```
$ npm prepublish
```

[trav_img]: https://api.travis-ci.org/FormidableLabs/formidable-react-component-boilerplate.svg
[trav_site]: https://travis-ci.org/FormidableLabs/formidable-react-component-boilerplate

