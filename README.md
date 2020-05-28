# Demo: VueJS sign in page

A basic sign in page with password reset, built using VueJS to match provided designs.

Any HTML is written using PugJS, and CSS is written using SCSS.

To simulate a back-end, I have used [Reqres](https://reqres.in/).

CSS has been written to conform to my personal CSS styleguide, which can be found at [GitHub/OchidAugur/CSS-Styleguide](https://github.com/OrchidAugur/CSS-Styleguide).

The assets are compiled and bundled with ParcelJS, and testing is handled via Jest and Cypress.

## Getting started

- `cd` into the project's root directory using a terminal instance
- Ensure the current terminal instance is using Node v12 (version at the time of writing is 12.16.3)
	- If you are using Node Version Manager (nvm) and have Node v12 installed, you can run `nvm use`
- Install dependencies by running `npm i`

## Running locally

To serve the project at `http://localhost:1234`, run `npm start`.

## Building

To build the project in the `dist/` directory, run `npm run build`.

## Testing

### Jest

To run all Jest tests and receive a coverage report, run `npm test`.

### Cypress

**Note:** In order for Cypress to run properly, the project needs to be running locally. This can be done in a separate terminal instance. Be aware that both terminal instances will need to `cd` into the project's root directory and be running Node v12.

To run all Cypress tests in the terminal, run `npm run cypress:run`.

Alternatively, to run the tests within the Cypress application, run `npm run cypress:open`.

## Limitations & areas for improvement

Jest's test coverage is not exhaustive; for now I have opted for breadth rather than depth as I am relying on Cypress to cover the critical areas Jest currently misses.

Currently testing for errors communicating with the API is lacking as the project has been built to rely on an external, active API even in development and I have not explored simulating a bad connection for the sake of time.

Form validation is fairly basic- in a real world situation I would make this more robust.

Ideally, the new password page should include an email input rather than having a dummy value baked in. In a real world situation I would have raised this with the relevant parties, however in the interest of following the brief and matching the designs I was provided I made do and opted to acknowledge this here instead.

Usually I would include relevant styles within any Vue single file components I write, however I have had to split these out and include them in my stylesheet due to an odd bug with ParcelJS. Basically, it seems to only include CSS pulled from any JS in `index.html`, resulting in any other HTML pages being left without those styles and thus breaking. I chose the path of least resistance here rather than expending time and effort shifting the project to a different bundler.
