# Rentspree-Version-Check

> Version check component and auto refresh page for Rentspree application

[![NPM](https://img.shields.io/npm/v/rentspree-component-v2.svg)](https://www.npmjs.com/package/rentspree-component-v2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

This Lib is hosted on [Gemfury](https://gemfury.com/) as a private repository

To install this lib, you must grant Rentspree gemfury access to your npm

First, you need to config npm to use gemfury proxy for @rentspree package namespace

```bash
npm config set @rentspree:registry https://npm-proxy.fury.io/rentspree/
```

Then, login your gemfury account

```bash
npm login --registry https://npm-proxy.fury.io/rentspree/
```

You'll be prompted to input your credentials.
After that, it's good to go!

```bash
npm install --save @rentspree/component-v2
```

This should work for now!

## Prerequisites

The component depend on `peerDependencies` for the component dependencies. In order to use the component, you must have those dependencies installed in your _main_ project.

The dependencies are defined in `package.json` in `peerDependencies` field

| Dependency        | version            | Note |
| -------------------- | ---------------------- | ---- |
| prop-types        | ^15.5.4            |      |
| react             | ^15.0.0 or ^16.0.0 |      |
| react-dom         | ^15.0.0 or ^16.0.0 |      |
| styled-components | ^3.3.0             |      |
| axios             | ^0.18.0          |      |

## Usage

Simply import the component to your project, and it will be good to go!

```jsx
import React from "react"
import Version from "@rentspree/version-check"

class App extends React.Component {
  render() {
    <Version
      api="/version"
      idleTimeout={10000}
      bottom={5}
      right={5}
    />
  }
}
```

## Props
* `api` - to be called to get version number (Required)
* `idleTimeout` (number) - idle time before the api is called
* `color` (string) - font color
* `size` - font size in px
* `top` - absolute position from top in px
* `right` - absolute position from right in px
* `bottom` - absolute position from bottom in px
* `left` - absolute position from left in px

## UPDATE NEW VERSION
1. To update version, we need to push new version to gemfury registry.
we can doing it by

    ```bash
    npm version patch
    ```

2. Push to git normally

## License

Rentspree © [rentspree](https://www.rentspree.com)
