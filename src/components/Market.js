import React from "react";
import Table from "./Table";

export default function Market(props) {
    const data = [
        { id: 1, currency: 'Eth', change: '$0.000000', price: '$0.000000', marketCap: '$0.000000', cashback: '00.00M' },
        { id: 2, currency: 'BTC', change: '$0.000000', price: '$0.000000', marketCap: '$0.000000', cashback: '00.00M' },
        { id: 3, currency: 'USDT', change: '$0.000000', price: '$0.000000', marketCap: '$0.000000', cashback: '00.00M' },
        { id: 4, currency: 'USDC', change: '$0.000000', price: '$0.000000', marketCap: '$0.000000', cashback: '00.00M' },
      ];
  return (
    <div>
      <div className=" bg-dark text-white py-5">
        <div className="text-center">
          <h3>{props.title}</h3>
          <p>Track your favorite cryptocurrency and its worth at one place.</p>
        </div>
        <Table data={data} />        
      </div>
    </div>
  );
}
