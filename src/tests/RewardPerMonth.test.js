import { calculateRewardPerMonth } from "utils";
const transactions = [
  {
    customerId: 1,
    name: "Andre",
    amount: 0,
    transactionDate: "09-30-2022",
    reward: 0,
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 51,
    transactionDate: "10-01-2022",
    reward: 1,
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 100,
    transactionDate: "10-30-2022",
    reward: 50,
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 120,
    transactionDate: "10-31-2022",
    reward: 90,
  },
  {
    customerId: 1,
    name: "Andre",
    amount: 120,
    transactionDate: "11-20-2022",
    reward: 90,
  },
  {
    customerId: 2,
    name: "Ben",
    amount: 100,
    transactionDate: "10-20-2022",
    reward: 50,
  },
];
const expectedResult = [
  {
    customerId: 1,
    name: "Andre",
    reward: 0,
    month: "September",
  },
  {
    customerId: 1,
    name: "Andre",
    reward: 141,
    month: "October",
  },
  {
    customerId: 1,
    name: "Andre",
    reward: 90,
    month: "November",
  },
  {
    customerId: 2,
    name: "Ben",
    reward: 50,
    month: "October",
  },
];

test("should have a reward value", () => {
  expect(calculateRewardPerMonth(transactions)).toEqual(expectedResult);
});
