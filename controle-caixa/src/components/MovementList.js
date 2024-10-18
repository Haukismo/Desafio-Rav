import React from 'react';

const MovementList = ({ movements, handleDeleteMovement }) => (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Receitas e Despesas</h2>
        <table className="w-full table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Valor</th>
                    <th className="px-4 py-2">Data</th>
                    <th className="px-4 py-2">Observação</th>
                    <th className="px-4 py-2">Tipo de movimentação</th>
                    <th className="px-4 py-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {movements.map((movement, index) => (
                    <tr key={index} className="text-center">
                        <td className="border px-4 py-2">{movement.value}</td>
                        <td className="border px-4 py-2">{movement.date}</td>
                        <td className="border px-4 py-2">{movement.observation}</td>
                        <td className="border px-4 py-2">
                            <span className={movement.type === 'Receita' ? 'text-blue-500' : 'text-red-500'}>
                                {movement.type}
                            </span>
                        </td>
                        <td className="border px-4 py-2">
                            <button 
                                onClick={() => handleDeleteMovement(index)} 
                                className="text-red-500"
                            >
                                <i className="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default MovementList;
