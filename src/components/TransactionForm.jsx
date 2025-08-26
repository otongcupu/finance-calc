import React, { useState } from "react";
import "./TransactionForm.css";

const TransactionForm = ({ onAddTransaction }) => {
    const [formData, setFormData] = useState({
        description: "",
        amount: "",
        type: "income",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.description || !formData.amount) return;

        const newTransaction = {
            id: Date.now(),
            description: formData.description,
            amount: parseFloat(formData.amount),
            type: formData.type,
            date: new Date().toLocaleDateString("id-ID"),
        };

        onAddTransaction(newTransaction);
        setFormData({ description: "", amount: "", type: "income" });
    };

    return (
        <form className="transaction-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="description">Nama Transaksi</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="contoh: Gaji, Belanja, dll"
                />
            </div>

            <div>
                <label htmlFor="amount">Jumlah</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Rp"
                />
            </div>

            <div>
                <label htmlFor="type">Jenis</label>
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option value="income">Pemasukan</option>
                    <option value="expense">Pengeluaran</option>
                </select>
            </div>

            <button type="submit">Tambah Transaksi</button>
        </form>
    );
};

export default TransactionForm;
