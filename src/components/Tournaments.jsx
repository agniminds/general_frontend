
import React, { useEffect, useState } from 'react';
import Tournament from './Tournament';

const Tournaments = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const response = await fetch('/tournaments');
                const jsonData = await response.json();
                setTournaments(jsonData);
            } catch (error) {
                console.error('Failed to fetch tournaments:', error);
            }
        };

        fetchTournaments();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {tournaments.map((tournament, index) => (
                    <div className="col-md-4" key={index}>
                        <Tournament tournament={tournament} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tournaments;
