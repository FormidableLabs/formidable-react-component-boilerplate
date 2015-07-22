[![Travis Status][trav_img]][trav_site]


React Component Boilerplate
===========================

Formidable Labs flavored React component boilerplate. This is a set of opinions
on how to start a React component.

## Make it yours!

The top level component in this boilerplate repo is called
`BoilerplateComponent`. You probably want to change that. Remember to update
`src/index.js`, `webpack.config.js`, and `webpack.config.dev.js`to reflect your
naming changes!

## The Generator

We expect these opinions to change *often*.  We've written a yeoman generator to
pull down the freshest copy of this repo whenever you use it.  It just copies
this repo so you don't have to. Check it out
[here](https://github.com/FormidableLabs/generator-formidable-react-component)


## Build

Build for production use (NPM, bower, etc).

```
$ npm run build
```

Which is composed of commands to create `dist` UMD bundles (min'ed, non-min'ed)

```
$ npm run build-dist
```

and the ES5 `lib`:

```
$ npm run build-lib
```

Note that `dist/` files are only updated and committed on **tagged releases**.


## Development

All development tasks consist of watching the demo bundle, the test bundle
and launching a browser pointed to the demo page.

Run the `demo` application in a browser window with hot reload:
(More CPU usage, but faster, more specific updates)

```
$ npm run hot
```

Run the `demo` application with watched rebuilds, but not hot reload:

```
$ npm run dev
```

From there you can see:

* Demo app: [127.0.0.1:3000](http://127.0.0.1:3000/)
* Client tests: [127.0.0.1:3001/test/client/test.html](http://127.0.0.1:3001/test/client/test.html)

## Quality

Here's what CI (and you) should check:

```
$ npm run check
```

Which is currently comprised of:

```
$ npm run lint
$ npm run test
```

### Client Tests

The client tests rely on webpack dev server to create and serve the bundle
of the app/test code at: http://127.0.0.1:3001/assets/main.js which is done
with the task `npm run server-test`.



## Releases

Built files in `dist/` should **not** be committeed during development or PRs.
Instead we _only_ build and commit them for published, tagged releases. So
the basic workflow is:

```
# Update version
$ vim package.json # and bump version
$ git add package.json

# Create the `dist/*{.js,.map}` files and publish working project to NPM.
$ npm publish
# ... the project is now _published_ and available to `npm`.

# Commit, tag
$ git add dist/
$ git commit -m "Bump version to vVERS"
$ git tag -a "vVERS" -m "Version VERS"
$ git push
$ git push --tags
# ... the project is now pushed to GitHub and available to `bower`.
```

Side note: `npm publish` runs `npm prepublish` under the hood, which does the
build.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md)

[trav_img]: https://api.travis-ci.org/FormidableLabs/formidable-react-component-boilerplate.svg
[trav_site]: https://travis-ci.org/FormidableLabs/formidable-react-component-boilerplate

