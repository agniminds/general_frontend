import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import FormOutput from './FormOutput'; // Importing FormOutput component to use below

export default function Form({ games }) {
    const [formData, setFormData] = useState({
        region: '',
        month: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Simplified handleSubmit to prevent default form submission behavior
    const handleSubmit = (e) => {
        e.preventDefault();
        // The actual fetch logic will be in the FormOutput component
        // This just prevents the default form submission behavior
    };

    const regions = ['Europe', 'America', 'Asia', 'Africa']; // Example list of regions
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // List of months

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="region">Region:</label>
                    <select
                        className="form-control"
                        id="region"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        required>
                        <option value="">Select Region</option>
                        {regions.map((region, index) => (
                            <option key={index} value={region}>{region}</option>
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
                {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
            </form>
            {/* Pass formData to FormOutput component */}
            <FormOutput data={formData} games={games} />
        </div>
    );
}
