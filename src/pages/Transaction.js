import { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetch from "api/transactions";
import { calculateRewardPerTransaction, calculateRewardPerMonth } from "utils";
import Table from "components/Table";

function Transaction() {
  const navigate = useNavigate();
  const [transactionByCustomer, setTransactionByCustomer] = useState(null);
  const [loading, setLoading] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Date",
        accessor: "month",
      },
      {
        Header: "Reward",
        accessor: "reward",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <button onClick={() => goToTransactionDetail(row)}>Details</button>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    setLoading(true);
    fetch()
      .then((data) => {
        const rewardData = calcResult(data);
        setTransactionByCustomer(rewardData);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors when using a real api
        console.error("Error in fetching data from API: ", error);
        setLoading(false);
      });
  }, []);

  const calcResult = (transactionData) => {
    const rewardPerTransaction = calculateRewardPerTransaction(transactionData);

    const rewardPerMonth = calculateRewardPerMonth(rewardPerTransaction);

    return rewardPerMonth;
  };

  const goToTransactionDetail = (row) => {
    const { name, month, reward } = row.original;
    navigate(`/transaction/${row?.original?.customerId}`, {
      state: {
        name,
        month,
        monthlyReward: reward,
      },
    });
  };

  if (loading) return <div>Loading...</div>;

  if (!loading && !transactionByCustomer)
    return <div>There are no result.</div>;

  return (
    <div className="flex-col">
      <p>
        <strong>Monthly Rewards by Customers</strong>
      </p>
      <Table columns={columns} data={transactionByCustomer} />
    </div>
  );
}

export default Transaction;
