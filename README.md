## Demo: https://yzubchenko.github.io/sticky-notes-test/build/
# Sticky Notes Test Project
- [Sticky Notes Test Project](#sticky-notes-test-project)
  - [Summary](#summary)
  - [Motivation](#motivation)
  - [Architecture description](#architecture-description)
  - [Source Structure](#source-structure)
  - [Install](#install)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm run build`](#npm-run-build)
    - [`npm run checked-build`](#npm-run-checked-build)
    - [`npm run eject`](#npm-run-eject)
    - [`npm run style-format`](#npm-run-style-format)
    - [`npm rum lint`](#npm-rum-lint)
    - [`npm rum format`](#npm-rum-format)

## Summary
This project represents modern way to develop web-applications on the example of Sticky Notes app. It based on [React](https://reactjs.org/) for UI and [Redux](https://redux.js.org/) for state management. For async operations and side-effects [redux-observable](https://redux-observable.js.org/) is used (RxJS-based middleware for Redux). To reduce boilerplate code [redux-toolkit](https://redux-toolkit.js.org) is used.

## Motivation

The project developed as part of job application process.

## Architecture description

The core of the application is the Redux-store. The way Redux works, is that it manages state in the store, and manipulates state via the reducer which is nothing but a simple function. Components only react to these state changes and dispatch actions to reducers/epics during their life-cycle. This is the only way to trigger a state change.<br />
Data asynchronously saves to the browser's `localStorage` - it's mock representation of persistant storage.

![Data flow image](data-flow.png?raw=true "Data flow")

So, the architecture provides two important features:
1. Single source of truth 
2. One-way data flow

*Note: in more complicated applications it's may be needed to use things like selectors and data-normalization. Also, due to simplicity of the project, I did not separate a logic part of views to containers, but such separation might be useful in real projects.*

## Source Structure
```
📦src
 ┣ 📂api        - set of functions that represent the api mock
 ┣ 📂components - react-components represent views of the app
 ┗ 📂store      - represents store and its slices (duck-style set of actions, action types and reducers), also contains epics and getters for every store entity.
```

## Install

`npm install`

## Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run checked-build`

Builds the app for production with eslint check, also formats code and styles.

### `npm run eject`

*Note: this is a one-way operation. Once you eject, you can’t go back!*<br />
This command will remove the single build dependency from the project.

### `npm run style-format`

Checks and formats styles by rules at `.stylelintrc`

### `npm rum lint`

Runs code-linter

### `npm rum format`

Formats code by rules at `.prettierrc`



