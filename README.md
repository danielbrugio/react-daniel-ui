<p align="center">
  <a href="">
    <img src="" alt="" width="200" />
  </a>
</p>

<h1 align="center">React component library based on styled components </h1>
<p align="center">
  <img alt="NPM version" src="" />
</p>

## Install

For npm users:

```shell
  $ npm install react-daniel-ui styled-components
```

For Yarn users:

```shell
  $ yarn add react-daniel-ui styled-components
```

## Links

[Documentation click here]()

[Github Repository]("https://github.com/danielbrugio/react-daniel-ui.git")

[Demo Repository](https://github.com/danielbrugio/demo-daniel-ui.git)

## Example

```jsx
import React from "react";
import { Button } from "react-daniel-ui";

const App = () => (
  <div>
    <Button>Click Here</Button>
  </div>
);

export default App;
```

## Theme Support

We have two default themes "sea" and "mountain" but you can use your custom theme through a javascript object

```jsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "react-daniel-ui";
import { mountain } from "react-daniel-ui";

const App = () => (
  <div>
    <ThemeProvider theme={mountain}>
      <Button>Click Here</Button>
    </ThemeProvider>
  </div>
);

export default App;
```

## Explore with storybook

You can clone the repository and use the storybook to see examples of each component, modify the repository, and bring in new ideas.

```shell
  $ npm run storybook
```

or

```shell
  $ yarn storybook
```
