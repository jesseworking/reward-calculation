import { useMemo, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import fetch from "api/transactions";
import { getMonthName, calculateRewardPerTransaction } from "utils";
import Table from "components/Table";

function TransactionByCustomer() {
  const { customerId } = useParams();
  const location = useLocation();
  const [transactions, setTransactions] = useState(null);

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "transactionDate",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Reward",
        accessor: "reward",
      },
    ],
    []
  );

  useEffect(() => {
    fetch()
      .then((data) => {
        const monthlyTransaction = data.filter((customer) => {
          const month = getMonthName(customer.transactionDate);
          return (
            customer.customerId === Number(customerId) &&
            location.state.month === month
          );
        });

        const rewardPerTransaction =
          calculateRewardPerTransaction(monthlyTransaction);

        setTransactions(rewardPerTransaction);
      })
      .catch((error) => {
        // Handle errors when using a real api
        console.error("Error in fetching data from API: ", error);
      });
  }, [customerId, location.state.month]);

  if (!transactions) return <div>There are no result.</div>;

  return (
    <div className="flex-col">
      <p>
        {location.state.name}'s Reward for {location.state.month}:{" "}
        <strong>{location.state.monthlyReward}</strong>
      </p>
      <Table columns={columns} data={transactions} />
    </div>
  );
}

export default TransactionByCustomer;
