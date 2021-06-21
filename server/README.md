# Mongoose Node.js Express TypeScript application for API development.

definition

# Why TypeScript?

While it's true that developing applications on an Untyped language such as **JavaScript**, is easier to learn and is faster to develop, it will undeniably get harder and harder to grasp as the application grows in scale. This in turn, leads to more run-time errors consuming more development hours, as the codebase grows. By using the **TypeScript** standard, there is a better code stability with **Interface Oriented Development**, leading to better standardized codes. TypeScript allows developers to focus more on exposed Interfaces or API. This makes the codebase easier to maintain.

# Prerequisites

To build and run this app locally you will need:

- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)
- Install [MongoDB](https://www.mongodb.com/try/download/community)

# Getting started

- Clone the repository

```
git clone --depth=1  <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
npm run tsc
```

- Build and run the project with auto reload (nodemon)

```
npm run server
```

- Build and run the project

```
npm run start
```

Finally, navigate to `http://localhost:5000/` and you should see the API running!

## Project Structure

The most obvious difference in a TypeScript + Node project is the folder structure. In a TypeScript project, it's best to have separate _source_ and _distributable_ files. TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run start`

| Name               | Description                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **config**         | Contains config environment to be used by the config package, such as MongoDB URI, jwtSecret, and etc.                                                        |
| **dist**           | Contains the distributable (or output) from your TypeScript build                                                                                             |
| **node_modules**   | Contains all your npm dependencies                                                                                                                            |
| **public**         | Contains the documentation of the project and the saved images                                                                                            |

| **src**            | Contains your source code that will be compiled to the dist dir                                                                                               |
| **src/middleware** | Contains the middlewares to intercept requests                                                                                                                |
| **src/models**     | Models define Mongoose schemas that will be used in storing and retrieving data from MongoDB                                                                  |
| **src/routes**     | Routes define the endpoints of your API                                                                                                   |
| **src/controllers**| Controllers define how to handle the request                                                                   |
| **src/types**      | Contains all your custom types to better handle type checking with TypeScript                                                                                 |
| **src/server.ts**  | Entry point to your express app                                                                                                                               |
| package.json       | File that contains npm dependencies as well as                                                    |
| tsconfig.json      | Config settings for compiling server code written in TypeScript                                                                                               |
| tslint.json        | Config settings for TSLint code style checking                                                                                                                |

### Configuring TypeScript compilation

TypeScript uses the file `tsconfig.json` to adjust project compile options.
Let's dissect this project's `tsconfig.json`, starting with the `compilerOptions` which details how your project is compiled.

```json
    "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    }
  }
```