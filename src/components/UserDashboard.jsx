import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    try {
      const res = await axios.get('http://localhost:5000/api/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(res.data.user);
    } catch (err) {
      console.error('Unauthorized:', err.message);
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return user ? (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  ) : (
    <p>Loading user data...</p>
  );
};

export default UserDashboard;
