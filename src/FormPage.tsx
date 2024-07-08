
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './index.css';
import { useNavigate } from 'react-router-dom';


const FormPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !phone || !email) {
      setError('Please fill out all fields.');
      return;
    }

    
    localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));

    
    navigate('/second-page');
  };

  return (
    <div className="page-container">
      <Typography variant="h5" gutterBottom className="form-title" >
        User Information
      </Typography>
      {error && <Typography color="error" className="error-message">{error}</Typography>}
      <form onSubmit={(e) => e.preventDefault()} className="form-container">
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
          className="form-field"
        />
        <TextField
          label="Phone Number"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
          required
          className="form-field"
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
          className="form-field"
        />
        <div className="button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
