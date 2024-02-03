import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function FormOutput({ data, games }) {

    const [finalState, setfinalState] = useState([])

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`);
                if (!response.ok) {
                    throw new Error('Data retrieval failed');
                }
                const jsonData = await response.json();
                setfinalState(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.log('Error:', error.message);
                console.log('There was an error encountered while loading this page');
            }
        }
        makeRequest();
    }, []);

    return (
        <div className="container mt-5">
            {finalState.length > 0 ? (
                <div className="row">
                    {finalState.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Region: {item.region}</p>
                                    <p className="card-text">Month: {item.month}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <h1 className="font-weight-bold big-text">No Tournaments</h1>
                </div>
            )}
        </div>
    );
}

