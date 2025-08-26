import React from "react";
import "./TransactionList.css";

const TransactionList = ({ transactions }) => {
    return (
        <div className="transaction-list">
            <h2>Daftar Transaksi</h2>

            {transactions.length === 0 ? (
                <p>Belum ada transaksi.</p>
            ) : (
                <ul>
                    {transactions.map((txn) => (
                        <li
                            key={txn.id}
                            className={`transaction-item ${txn.type}`}
                            style={{
                                borderLeft:
                                    txn.type === "income" ? "5px solid green" : "5px solid red",
                                padding: "10px",
                                marginBottom: "10px",
                                backgroundColor: "#fafafa",
                            }}
                        >
                            <div>
                                <strong>{txn.description}</strong> <br />
                                <small>{txn.date}</small>
                            </div>
                            <div
                                style={{
                                    color: txn.type === "income" ? "green" : "red",
                                    fontWeight: "bold",
                                }}
                            >
                                {txn.type === "income" ? "+" : "-"} Rp{" "}
                                {txn.amount.toLocaleString("id-ID")}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TransactionList;
