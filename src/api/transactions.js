// Simulates data(3-months only) coming from a API
const getTransactionData = () => {
  const transactionPromise = new Promise((resolve, reject) => {
    return resolve([
      {
        customerId: 1,
        name: "Andre",
        amount: 50,
        transactionDate: "09-01-2022",
      },
      {
        customerId: 1,
        name: "Andre",
        amount: 51,
        transactionDate: "09-02-2022",
      },
      {
        customerId: 1,
        name: "Andre",
        amount: 100,
        transactionDate: "09-05-2022",
      },
      {
        customerId: 1,
        name: "Andre",
        amount: 1000,
        transactionDate: "09-15-2022",
      },
      {
        customerId: 1,
        name: "Andre",
        amount: 120,
        transactionDate: "09-30-2022",
      },
      {
        customerId: 1,
        name: "Andre",
        amount: 100,
        transactionDate: "10-01-2022",
      },
      {
        customerId: 1,
        name: "Andre",
        amount: 120,
        transactionDate: "11-01-2022",
      },
      {
        customerId: 1,
        name: "Andre",
        amount: 80,
        transactionDate: "11-30-2022",
      },
      {
        customerId: 2,
        name: "Ben",
        amount: 10,
        transactionDate: "09-01-2022",
      },
      {
        customerId: 3,
        name: "Core",
        amount: 50,
        transactionDate: "09-01-2022",
      },
      {
        customerId: 4,
        name: "David",
        amount: 70,
        transactionDate: "09-01-2022",
      },
      {
        customerId: 5,
        name: "Eric",
        amount: 100,
        transactionDate: "09-01-2022",
      },
      {
        customerId: 6,
        name: "Feder",
        amount: 150,
        transactionDate: "09-01-2022",
      },
    ]);
  });

  return transactionPromise;
};

export default getTransactionData;
