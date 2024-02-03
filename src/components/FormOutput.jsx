import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormOutput({ data, games }) {
    const [finalState, setFinalState] = useState([]);

    useEffect(() => {
        if (data.region && data.month) {
            const makeRequest = async () => {
                try {
                    const url = `/tournaments/${data.region}/${data.month}`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Data retrieval failed');
                    }
                    const jsonData = await response.json();
                    setFinalState(jsonData);
                } catch (error) {
                    console.error('Error:', error.message);
                }
            };
            makeRequest();
        }
    }, [data.region, data.month]);

    return (
        <div className="container mt-5">
            {Object.keys(finalState).length > 0 ? (
                Object.entries(finalState).map(([key, value]) => (
                    <div key={key}>
                        <h2>{key}</h2> {/* Display the cluster name */}
                        <div className="row">
                            {value.map((tournament, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{tournament.name}</h5>
                                            <p className="card-text">Place: {tournament.place}</p>
                                            <p className="card-text">Start Date: {tournament.startDate}</p>
                                            <p className="card-text">End Date: {tournament.endDate}</p>
                                            {/* Add more fields as needed */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <h1>No Tournaments Found</h1>
                </div>
            )}
        </div>
    );
}
