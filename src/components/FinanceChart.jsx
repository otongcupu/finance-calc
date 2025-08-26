import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const FinanceChart = ({ transactions }) => {
    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((total, t) => total + t.amount, 0);

    const expense = transactions
        .filter((t) => t.type === "expense")
        .reduce((total, t) => total + t.amount, 0);

    const data = {
        labels: ["Pemasukan", "Pengeluaran"],
        datasets: [
            {
                label: "Jumlah (Rp)",
                data: [income, expense],
                backgroundColor: ["green", "red"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value) => "Rp " + value.toLocaleString("id-ID"),
                },
            },
        },
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Grafik Keuangan</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default FinanceChart;
