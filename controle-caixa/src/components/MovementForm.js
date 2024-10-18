import React from 'react';

const MovementForm = ({ form, handleInputChange, handleAddMovement }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Movimentações</h2>
        <div className="mb-4">
            <label className="block text-gray-700">Valor</label>
            <input 
                type="text" 
                name="value" 
                value={form.value} 
                onChange={handleInputChange} 
                className="w-full p-2 border rounded" 
                placeholder="Digite o valor" 
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Data</label>
            <input 
                type="date" 
                name="date" 
                value={form.date} 
                onChange={handleInputChange} 
                className="w-full p-2 border rounded" 
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Observação (opcional)</label>
            <input 
                type="text" 
                name="observation" 
                value={form.observation} 
                onChange={handleInputChange} 
                className="w-full p-2 border rounded" 
                placeholder="Digite a observação" 
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Tipo de movimentação</label>
            <div className="flex items-center">
                <input 
                    type="radio" 
                    name="type" 
                    value="Receita" 
                    checked={form.type === 'Receita'} 
                    onChange={handleInputChange} 
                    className="mr-2" 
                />
                <label className="mr-4">Receita</label>
                <input 
                    type="radio" 
                    name="type" 
                    value="Despesa" 
                    checked={form.type === 'Despesa'} 
                    onChange={handleInputChange} 
                    className="mr-2" 
                />
                <label>Despesa</label>
            </div>
        </div>
        <button 
            onClick={handleAddMovement} 
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
            + ADICIONAR
        </button>
    </div>
);

export default MovementForm;

