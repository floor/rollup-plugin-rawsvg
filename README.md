# rollup-plugin-rawsvg

Import SVG raw files

## Installation

```bash
yarn install rollup-plugin-raw-svg --dev
```

## Usage

```js
// rollup.config.js
import rawsvg from 'rollup-plugin-rawsvg';

export default {
  entry: 'src/input.js',
  dest: 'dist/output.js',
  plugins: [
    rawsvg()
  ]
};
```

You can use svgs in your bundle thusly:

```js
import iconMenu from './icon/menu.svg'
document.body.appendChild( iconMenu )
```

SVGs are not encoded using base64, it will only import raw files as text

## Sources

This plugin was built (based on the rollup-plugin-svg) but remove base64 encoding mecanism

[rollup-plugin-svg](https://github.com/rollup/rollup-plugin-svg)

## License

MIT
