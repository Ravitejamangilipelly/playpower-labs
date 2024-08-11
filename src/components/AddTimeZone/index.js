import React, { useState } from 'react';
import "./index.css"

const AddTimeZone = ({ onAdd }) => {
  const [newZone, setNewZone] = useState('');

  const handleAdd = () => {
    if (newZone) {
      onAdd(newZone);
      setNewZone('');
    }
  };

  return (
    <div className="add-timezone">
      <input 
        type="text" 
        value={newZone} 
        onChange={(e) => setNewZone(e.target.value)} 
        placeholder="Add Time Zone"
        className="input-zone"
      />
      <button className="add-btn" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTimeZone;
