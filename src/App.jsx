import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import FinanceChart from "./components/FinanceChart";

const App = () => {
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("transactions");
        return saved ? JSON.parse(saved) : [];
    });

    // Fungsi untuk menambahkan transaksi baru
    const handleAddTransaction = (newTransaction) => {
        setTransactions([newTransaction, ...transactions]);
    };

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    return (
        <div className="App">
            <h1>Kalkulator Keuangan Pribadi</h1>

            {/* Form Input Transaksi */}
            <div className="section">
                <Summary className="summary" transactions={transactions} />
            </div>
            <div className="section">
                <TransactionForm className="transaction-form" onAddTransaction={handleAddTransaction} />
            </div>
            <div className="section">
                <TransactionList className="transaction-list" transactions={transactions} />
            </div>
            <div className="section">
                <FinanceChart className="finance-chart" transactions={transactions} />
            </div>

            {/* Debug sementara: tampilkan JSON transaksi */}
            <pre className="debug-box">
                {JSON.stringify(transactions, null, 2)}
            </pre>
        </div>
    );
};

export default App;
