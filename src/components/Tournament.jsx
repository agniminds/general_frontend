
import React from 'react';

const Tournament = ({ tournament }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{tournament.name}</h5>
                <p className="card-text">Place: {tournament.place}</p>
                <p className="card-text">Start Date: {tournament.startDate}</p>
                <p className="card-text">End Date: {tournament.endDate}</p>
                <p className="card-text">
                    Website: {tournament.website ?
                        <a href={tournament.website} target="_blank" rel="noopener noreferrer">Visit</a> :
                        "Not available"}
                </p>
                <p className="card-text">
                    Regulations: {tournament.regulations ?
                        <a href={tournament.regulations} target="_blank" rel="noopener noreferrer">View Regulations</a> :
                        "Not available"}
                </p>
            </div>
        </div>
    );
}

export default Tournament;
