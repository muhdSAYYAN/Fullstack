import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RecentOrders = () => {
    const [userName, setUserName] = useState('');
    const [recentOrders, setRecentOrders] = useState([]);

    useEffect(() => {
        // Fetch the logged-in user's information (like username) from wherever it's stored (e.g., local storage)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUserName(parsedUser.username);
            
            // Fetch recent orders for the logged-in user
            getRecentOrders(parsedUser.username);
        }
    }, []);

    const getRecentOrders = async (userName) => {
        try {
            const res = await axios.get("http://localhost:8700/api/order/getRecentOrder", {
                params: { userName }, // Send username as a parameter in the request,
                withCredentials:true
            });
            setRecentOrders(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <div>
            <h1>Welcome, {userName}!</h1>
            <p>Recent Orders:</p>
            <ul>
                {recentOrders.map(order => (
                    <li key={order.id}>{order.orderDetails}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecentOrders;
