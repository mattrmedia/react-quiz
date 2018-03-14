# React Quiz Example

A minimum viable React quiz thanks to Jared Palmer and [Parcel Bundler](https://parceljs.org) 

## Getting started

Clone and install deps

```
git clone git@github.com:mattrmedia/react-quiz.git
cd react-quiz
yarn
yarn start
```

Then open `http://localhost:1234` and edit `index.js` and press save. Parcel
will automagically hot reload you files whenever you make changes.

## Building for Production

```
npm run build
```

This will compile your JS and copy your `index.html` to the `dist` folder which
you can deploy wherever as a good ol' webpage.

## CSS

[Parcel uses PostCSS plugins to manage CSS assets](https://parceljs.org/transforms.html#postcss).
I've included `autoprefixer` for vendor prefixing with the same setup as
`create-react-app`. You can find and modify the PostCSS setup in `package.json`.
If you'd rather keep your PostCSS setup in a dotfile, you can delete the
`postcss` key from `package.json`, and place its contents in a `.postcssrc` file
too.
