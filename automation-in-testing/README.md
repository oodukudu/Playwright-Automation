Instructions to Run the Automation Test Suite

## Setup/Prerequisites
Ensure the below prerequisites are met before running the test suite.
1. Install:
- Node.js - install Node.js (version 16 or higher). Download from the official website - https://nodejs.org/en
- npm - to install the latest version of npm, run the following command on the command line `npm install -g npm`
- Playwright: instructions for installation are listed below
- Git - ensure this is installed on your machine to clone the repository

2. Clone this repository.
- Open a command prompt or terminal
- Clone the automation project by running `git clone repo-url`
- Navigate to the project directory: `cd repo-folder`

3. Ensure you're in the project directory. Then run `npm install` to install dependencies.

4. Run `npx playwright install` to install playwright browsers

## Run Tests
- To execute all tests in the suite, run: `npx playwright test`.
- To run a specific test file, run: `npx playwright test <test-file-name>.spec.js`.
- To run tests in a specific broswer, run: `npx playwright test --project=chromium`. Replace `chromium` with `firefox` for Firefox browser and `webkit` for Safari.

## Generate Reports
- Run this command to view detailed HTML Report: `npx playwright show-report`. This will open a detailed report in your default browser.

## To troubleshoot
- Ensure all dependecies are up-to-date: `npm update`
- If tests fail due to browser installation issue, kindly re-run: `npx playwright install`

## Additional Support
- For an additional support if you encounter any issues, kindly refer to the Playwright official website - https://playwright.dev or contact the project owner - Oyin Odukudu for assistance.
