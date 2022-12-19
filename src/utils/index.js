const getMonthName = (date) => {
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = new Date(date).getMonth();
  return months[month];
};

const calculateRewardPerTransaction = (transactionData) => {
  return transactionData.map((item) => {
    let reward = 0;
    if (item.amount >= 50 && item.amount <= 100) reward = item.amount - 50;
    if (item.amount > 100) reward = (item.amount - 100) * 2 + 50;
    return { ...item, reward };
  });
};

const calculateRewardPerMonth = (transactions) => {
  let byCustomer = {};
  transactions.forEach((item) => {
    const month = getMonthName(item.transactionDate);
    Object.assign(byCustomer, {
      [item.customerId]: {
        ...byCustomer[item.customerId],
        [month]: {
          name: item.name,
          reward:
            byCustomer[item.customerId] && byCustomer[item.customerId][month]
              ? byCustomer[item.customerId][month].reward + item.reward
              : item.reward,
        },
      },
    });
  });

  const transactionResult = [];
  Object.keys(byCustomer).forEach((customerId) => {
    Object.keys(byCustomer[customerId]).forEach((month) => {
      transactionResult.push({
        ...byCustomer[customerId][month],
        customerId: Number(customerId),
        month,
      });
    });
  });

  return transactionResult;
};

export { getMonthName, calculateRewardPerTransaction, calculateRewardPerMonth };
