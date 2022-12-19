import { calculateRewardPerTransaction } from "utils";
const transactions = [
  {
    customerId: 1,
    name: "Andre",
    amount: 50,
    transactionDate: "09-30-2022",
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 51,
    transactionDate: "09-30-2022",
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 100,
    transactionDate: "09-30-2022",
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 120,
    transactionDate: "09-30-2022",
  },
];
const expectedResult = [
  {
    customerId: 1,
    name: "Andre",
    amount: 50,
    transactionDate: "09-30-2022",
    reward: 0,
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 51,
    transactionDate: "09-30-2022",
    reward: 1,
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 100,
    transactionDate: "09-30-2022",
    reward: 50,
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 120,
    transactionDate: "09-30-2022",
    reward: 90,
  },
];

test("should have a reward value", () => {
  expect(calculateRewardPerTransaction(transactions)).toEqual(expectedResult);
});
