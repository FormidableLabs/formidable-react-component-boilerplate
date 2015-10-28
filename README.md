[![Travis Status][trav_img]][trav_site]

React Component Boilerplate
===========================

Formidable Labs flavored React component boilerplate. This is a set of opinions
on how to start a React component.

## The Generator

We expect these opinions to change *often*.  We've written a yeoman generator to
pull down the freshest copy of this repo whenever you use it.  It just copies
this repo so you don't have to. Check it out
[here](https://github.com/FormidableLabs/generator-formidable-react-component)

To create a new project based on this boilerplate:

```sh
$ npm install -g yo
$ npm install -g generator-formidable-react-component
$ yo formidable-react-component
```

The generator replaces "boilerplate-component" and "BoilerplateComponent" across
this repo with names specific to your new project.
`src/components/boilerplate-component.jsx` and
`test/client/spec/components/boilerplate-component.spec.jsx`
are also renamed, and a fresh `README.md` is created.

## Development

Please see [DEVELOPMENT](DEVELOPMENT.md)

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md)

[trav_img]: https://api.travis-ci.org/FormidableLabs/formidable-react-component-boilerplate.svg
[trav_site]: https://travis-ci.org/FormidableLabs/formidable-react-component-boilerplate
