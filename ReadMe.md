The project is divided in two parts:
A client built in angular and a server built in NodeJS with Express and MongoDB.

# Prerequisites

To build and run this app locally you will need:

- Install [Node.js](https://nodejs.org/en/) v.14.15.5 or higher
- Install [VS Code](https://code.visualstudio.com/)
- Install [MongoDB](https://www.mongodb.com/try/download/community) not necessary with the default cloud database connection


- Clone the repository

```
git clone --depth=1  <project_name>
```

- Install dependencies

```
cd <project_name>
cd server
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


For the client side. 
- Install angular cli version 11.2.9. or higher
npm install -g @angular/cli

- Install dependencies

```
cd <project_name>
cd client
npm install
```

- Styling

add bootstrap.min.css && bootsrap.min.css.map
in ./client/node_modules/bootstrap/dist/css/


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


