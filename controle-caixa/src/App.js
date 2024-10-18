import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './index.css'; // Importação do Tailwind

const App = () => {
    const [movements, setMovements] = useState([]);
    const [form, setForm] = useState({
        value: '',
        date: '',
        observation: '',
        type: 'Receita'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleAddMovement = () => {
      if (isNaN(form.value) || parseFloat(form.value) <= 0) {
        alert('Por favor, insira um valor numérico positivo.');
        return;
      }
        setMovements([...movements, form]);
        setForm({ value: '', date: '', observation: '', type: 'Receita' });

    };

    const handleDeleteMovement = (index) => {
        const newMovements = movements.filter((_, i) => i !== index);
        setMovements(newMovements);
    };

    return (
        <div className="bg-gray-100 p-8">
            <Header />
            <Dashboard 
                form={form} 
                handleInputChange={handleInputChange} 
                handleAddMovement={handleAddMovement} 
                movements={movements} 
                handleDeleteMovement={handleDeleteMovement} 
            />
        </div>
    );
};

export default App;
