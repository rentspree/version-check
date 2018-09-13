# Rentspree-Version-Check

> Version check component and auto refresh page for React Application!

[![NPM](https://img.shields.io/npm/v/@rentspree/version-check.svg)](https://www.npmjs.com/package/@rentspree/version-check) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Overview

When deploying a new React Application version, do you still assume all users will refresh to get the new version? Your assumption is right until you find that very user who open the browser for days without refreshing. And when you found it, it already causes you error in your application. So why bother?

This Lib help React application periodically fetch an API server to get its version. It compares the version and execute refresh if a newer version is available!

## Install

```
npm install @rentspree/version-check
```

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


## License

Rentspree © [rentspree](https://www.rentspree.com)
