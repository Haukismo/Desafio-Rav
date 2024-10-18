import React from 'react';
import MovementForm from './MovementForm';
import MovementList from './MovementList';
import MovementChart from './MovementChart';

const Dashboard = ({ form, handleInputChange, handleAddMovement, movements, handleDeleteMovement }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MovementForm 
            form={form} 
            handleInputChange={handleInputChange} 
            handleAddMovement={handleAddMovement} 
        />
        <MovementChart movements={movements} /> {/* Adicionei o gráfico aqui */}
        <MovementList 
            movements={movements} 
            handleDeleteMovement={handleDeleteMovement} 
        />
    </div>
);

export default Dashboard;
