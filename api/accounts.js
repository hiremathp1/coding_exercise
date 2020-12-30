import fetch from "node-fetch";

// Endpoint URI
const path = "http://localhost:3000/account";

// Your code here...
async function retrieve(options) {
  // Number of items per "page"
  const n_items_per_page = 5;

  // First page is 1
  const page = (options || {}).page ? (options || {}).page : 1;
  const offset = (page - 1) * n_items_per_page;
  try {
    // Fetch the current page
    const response = await fetch(
      `${path}?count=${n_items_per_page + 1}&offset=${offset}`
    );
    const json_response = await response.json();

    // If the response array length less than count then the current page was the last.
    const is_last_page = json_response.length !== n_items_per_page + 1;
    if (!is_last_page)
      json_response.pop();

    return {
      accounts: json_response.map((item) => item["account"]),
      netAccounts: json_response.map((item) => {
        // Create an array with the signed ballances and add all values
        // of this array
        const balance = item.transactions
          .map((transaction) =>
            transaction.transactionType == "withdrawal"
              ? -transaction.amount
              : transaction.amount
          )
          .reduce(function (a, b) {
            return a + b; //as cent
          }, 0);
        return {netDeposits: Math.round(balance * 100) / 100, ...item};
      }),
      nextPage: is_last_page ? null : page + 1,
      previousPage: page == 1 ? null : page - 1,
    };
  } catch (e) {
    console.log("Error", e.name + ":");
    console.log(e.message);
    // Return null indicating there was no valid result
    return null;
  }
}

export default retrieve;
