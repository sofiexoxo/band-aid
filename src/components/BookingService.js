import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Change to your backend URL

export const createBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${API_URL}/book`, bookingData);
        return response.data;
    } catch (error) {
        throw error.response.data.detail;
    }
};

export const getBookingsByEmail = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/bookings/${email}`);
        return response.data;
    } catch (error) {
        throw error.response.data.detail;
    }
};

export const updateBookingDate = async (bookingId, newDate) => {
    try {
        const response = await axios.put(`${API_URL}/bookings/${bookingId}`, { date: newDate });
        return response.data;
    } catch (error) {
        throw error.response.data.detail;
    }
};

export const deleteBooking = async (bookingId) => {
    try {
        const response = await axios.delete(`${API_URL}/bookings/${bookingId}`);
        return response.data;
    } catch (error) {
        throw error.response.data.detail;
    }
};