![React LIME GRID](https://raw.githubusercontent.com/tsuyoshiwada/react-lime-grid/images/repo-banner.png)

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/react-lime-grid.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/react-lime-grid)
[![npm version](https://img.shields.io/npm/v/react-lime-grid.svg?style=flat-square)](https://www.npmjs.com/package/react-lime-grid)

> react-lime-grid for React.js

https://tsuyoshiwada.github.io/react-lime-grid/



## Table of Contents

* [Install](#install)
* [Setup](#setup)
    - [Basic](#basic)
    - [webpack](#webpack)
    - [PostCSS](#postcss)
* [Usage](#usage)
* [API](#api)
    - [Container](#container)
    - [Row](#row)
    - [Col](#col)
* [Changelog](#changelog)
* [Contribute](#contribute)
* [License](#license)



## Install

Install [lime-grid.css](https://github.com/tsuyoshiwada/lime-grid.css) and `react-lime-grid`.

```bash
$ npm install lime-grid.css react-lime-grid --save

# or

$ yarn add lime-grid.css react-lime-grid
```



## Setup

To use react-lime-grid, you need to import lime-grid.css.


### Basic

Add `<link>` to `<head>`.

```bash
$ cp node_modules/lime-grid.css/lime-grid.min.css ./path/to/
```

```html
<link rel="stylesheet" href="/path/to/lime-grid.min.css">
```


### webpack

Use the following 2 loaders.

* [style-loader](https://github.com/webpack-contrib/style-loader)
* [css-loader](https://github.com/webpack-contrib/css-loader)

**webpac.config.js**

```javascript
{
  test: /\.css$/,
  include: /node_modules/,
  // or
  // include: /node_modules\/lime-grid\.css/,
  use: ['style-loader', 'css-loader'],
},
```

**index.js**

```javascript
import 'lime-grid.css';
```


### PostCSS

See [lime-grid.css](https://github.com/tsuyoshiwada/lime-grid.css).


## Usage

```javascript
import React from 'react';
import { Container, Row, Col } from 'react-lime-grid';

const MyComponent = () => (
  <Container>
    <Row>
      <Col xs={12} lg={4}>...</Col>
      <Col xs={12} lg={4}>...</Col>
      <Col xs={12} lg={4}>...</Col>
    </Row>
  </Container>
);
```

See more detail for https://tsuyoshiwada.github.io/react-lime-grid/


## API

### Container

| prop        | type                 | default |
|:------------|:---------------------|---------|
| `className` | `string`             | `null`  |
| `children`  | `React$Element<any>` | `null`  |
| `tagName`   | `string`             | `'div'` |
| `fluid`     | `boolean`            | `false` |


### Row


| prop        | type                 | default |
|:------------|:---------------------|---------|
| `className` | `string`             | `null`  |
| `children`  | `React$Element<any>` | `null`  |
| `tagName`   | `string`             | `'div'` |
| `start`     | `GridBreakpoint`     | `null`  |
| `center`    | `GridBreakpoint`     | `null`  |
| `end`       | `GridBreakpoint`     | `null`  |
| `top`       | `GridBreakpoint`     | `null`  |
| `middle`    | `GridBreakpoint`     | `null`  |
| `bottom`    | `GridBreakpoint`     | `null`  |
| `around`    | `GridBreakpoint`     | `null`  |
| `between`   | `GridBreakpoint`     | `null`  |
| `reverse`   | `GridBreakpoint`     | `null`  |

`GridBreakpoint` is type defined as follows

```javascript
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type GridBreakpoint = Breakpoint | Breakpoint[];
```


### Col

| prop        | type                          | default |
|:------------|:------------------------------|---------|
| `className` | `string`                      | `null`  |
| `children`  | `React$Elemen<any>`           | `null`  |
| `tagName`   | `string`                      | `'div'` |
| `xs`        | `number`                      | `null`  |
| `sm`        | `number`                      | `null`  |
| `md`        | `number`                      | `null`  |
| `lg`        | `number`                      | `null`  |
| `xl`        | `number`                      | `null`  |
| `xl`        | `number`                      | `null`  |
| `xsOffset`  | `number`                      | `null`  |
| `smOffset`  | `number`                      | `null`  |
| `mdOffset`  | `number`                      | `null`  |
| `lgOffset`  | `number`                      | `null`  |
| `xlOffset`  | `number`                      | `null`  |
| `first`     | `boolean` or `GridBreakpoint` | `false` |
| `last`      | `boolean` or `GridBreakpoint` | `false` |



## Changelog

See [CHANGELOG.md](./CHANGELOG.md)



## Contribute

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Run `$ npm test`
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/react-lime-grid/issues).



## License

[MIT © tsuyoshiwada](./LICENSE)

