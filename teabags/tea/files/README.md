# <%= projectName %>

This TEA (Typescript + ExpressJS + Angular4) with Material flavor was made by [TeaKettle](https://github.com/hivivo/teakettle.git).

## Run
### Development mode
`teakettle serve dev` or `npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute TypeScript compiler, Express server and Angular build.

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production mode
`teakettle serve prod` or `npm run prod`: run the project with a production bundle and AOT compilation listening at [localhost:3000](http://localhost:3000)

## Deploy (Heroku)
1. Go to Heroku and create a new app
2. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
3. `heroku login`
4. `cd my-project/`
5. `git init`
6. `heroku git:remote -a your-app-name`
7. Download this repo and copy all files into `my-project` folder
8. Edit `.gitignore` and remove line with `/dist`
9. `npm i`
10. `ng build -prod` or `ng build -aot -prod`
11. `tsc -p server`
12. `git add .`
13. `git commit -m "Going to Heroku"`
14. `git push heroku master`
15. `heroku open`
16. A window will open with your app online

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Running TSLint
Run `ng lint` (frontend) and `npm run lintbe` (backend) to execute the linter via [TSLint](https://palantir.github.io/tslint/).

## Further help
To get more help regarding `teakettle` use `teakettle --help` or go [visit the wiki](https://github.com/hivivo/teakettle/wiki).

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### TeaKettle Manufacturer
* [Vivo Xu](https://github.com/hivivo)
