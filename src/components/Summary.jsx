import React from "react";
import "./Summary.css";

const Summary = ({ transactions }) => {
    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((total, t) => total + t.amount, 0);

    const expense = transactions
        .filter((t) => t.type === "expense")
        .reduce((total, t) => total + t.amount, 0);

    const balance = income - expense;

    return (
        <div>
            <h2 className="summary-title">Ringkasan</h2>
            <div className="summary">
                <div className="summary-card balance">
                    <h3>Total Saldo:</h3>
                    <p style={{ color: balance >= 0 ? "green" : "red" }}>
                        Rp {balance.toLocaleString("id-ID")}
                    </p>
                </div>
                <div className="summary-card income">
                    <h3>Pemasukan:</h3>
                    <p>+ Rp {income.toLocaleString("id-ID")}</p>
                </div>
                <div className="summary-card expense">
                    <h3>Pengeluaran:</h3>
                    <p>- Rp {expense.toLocaleString("id-ID")}</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;
