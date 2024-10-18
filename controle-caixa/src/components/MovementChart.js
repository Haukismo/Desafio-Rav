import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MovementChart = ({ movements }) => {
    const receitas = movements
        .filter(movement => movement.type === 'Receita')
        .reduce((total, movement) => total + parseFloat(movement.value.replace('R$', '').replace(',', '.')), 0);

    const despesas = movements
        .filter(movement => movement.type === 'Despesa')
        .reduce((total, movement) => total + parseFloat(movement.value.replace('R$', '').replace(',', '.')), 0);

    const data = {
        labels: ['Receitas', 'Despesas'],
        datasets: [
            {
                label: 'R$',
                data: [receitas, despesas],
                backgroundColor: ['#3b82f6', '#ef4444'],
                borderColor: ['#3b82f6', '#ef4444'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Receitas e Despesas',
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <Bar data={data} options={options} />
        </div>
    );
};

export default MovementChart;
