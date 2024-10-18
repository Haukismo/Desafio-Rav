import React from 'react';

const MovementItem = ({ movement, handleDelete }) => (
    <tr className="text-center">
        <td className="border px-4 py-2">{movement.value}</td>
        <td className="border px-4 py-2">{movement.date}</td>
        <td className="border px-4 py-2">{movement.observation}</td>
        <td className="border px-4 py-2">
            <span className={movement.type === 'Receita' ? 'text-blue-500' : 'text-red-500'}>
                {movement.type}
            </span>
        </td>
        <td className="border px-4 py-2">
            <button onClick={handleDelete} className="text-red-500">
                <i className="fas fa-trash"></i>
            </button>
        </td>
    </tr>
);

export default MovementItem;