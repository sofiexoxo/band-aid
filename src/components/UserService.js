import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Change to your backend URL

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data.detail;
    }
};

export const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/users/${email}`);
        return response.data;
    } catch (error) {
        throw error.response.data.detail;
    }
};

export const updateUserPassword = async (email, newPassword) => {
    try {
        const response = await axios.put(`${API_URL}/users/${email}`, { password: newPassword });
        return response.data;
    } catch (error) {
        throw error.response.data.detail;
    }
};

export const deleteUser = async (email) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${email}`);
        return response.data;
    } catch (error) {
        throw error.response.data.detail;
    }
};
