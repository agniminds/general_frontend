import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import FormOutput from './FormOutput';

export default function Form({ games }) {
    const [formData, setFormData] = useState({
        country: '',
        month: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }
            // Handle success, reset form, etc.
            console.log('Form data submitted successfully');

            // setFormData({
            //   country: '',
            //   month: ''
            // });
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    const countries = ['Europe', 'USA', 'Canada', 'UK', 'Australia']; // Example list of countries
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // List of months

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <select
                        className="form-control"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required>
                        <option value="">Select Country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="month">Month:</label>
                    <select
                        className="form-control"
                        id="month"
                        name="month"
                        value={formData.month}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Month</option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>{month}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <FormOutput data={formData} games={games} />
        </div>
    );
}


