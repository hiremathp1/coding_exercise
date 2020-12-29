# Code Test

## Setup

**Requires**: NodeJS >= 13, npm. Available [here](https://nodejs.org/en/).

Install the project with `npm install`.

`npm test` to run the provided tests.

## Account API

You are provided with an API endpoint `/account` that will return a JSON array of items in the following format:

```JSON
[
    {
        account: "25122540",
        accountName: "32552392",
        routingNumber: "731830633",
        transactions: [
            {
                transactionType: "deposit",
                amount: 700.16
            }
        ]
    }
]
```

The endpoint accepts the following options:

1. **count**: The number of items to return.
2. **offset**: The index of the first item to return.

## Tasks

1. Write a function called `retrieve` in `api/accounts.js` that consumes the `/accounts` API to return pages of 5 items.
2. The `retrieve` function should accept an options object containing the following key:

   - **page**: Indicates which page should be retrieved. Should default to the first page if not supplied.

3. If an error is encountered log the error with `console.log` and recover.
4. On a successful request, transform the payload into an object with the following keys:

   - **accounts**: An array containing the account numbers of all items in the request.
   - **netAccounts**: An array containing all objects returned from the request with an additional key called `netDeposits` that contains the sum of all deposits minus the sum of all withdrawals for that specific account.
   - **nextPage**: The page number of the next page of results or `null` if this is the last page.
   - **previousPage**: The page number of the previous page of results or `null` if this is the first page.

5. Return a promise from your `retrieve` function that resolves with the transformed data.

## Requirements

1. Only modify the `api/accounts.js` file.
2. Please do not add any additional libraries to your solution.
3. Ensure your code passes all tests.
4. Please write your solution using the Fetch API. For documentation see [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
5. Avoid using any `for` or `while` loops.
6. Feel free to use external resources for help but please do not copy any solutions from online--we would like to see your solution and thought process.
7. Please delete the `node_modules` folder before zipping and submitting your solution.
