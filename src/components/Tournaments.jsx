import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Tournaments({ games }) {
    return (
        <div></div>
        // <div className="container mt-5">

        //     {(games) ?

        //         (< div className="row">
        //             {games.map((game, index) => (
        //                 <div className="col-md-4" key={index}>
        //                     <div className="card">
        //                         <div className="card-body">
        //                             <h5 className="card-title">{game.title}</h5>
        //                             <p className="card-text">Genre: {game.genre}</p>
        //                             <p className="card-text">Release Year: {game.releaseYear}</p>
        //                             <p className="card-text">Platform: {game.platform}</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}

        //         </div>) : <> <div className="d-flex justify-content-center align-items-center vh-100">
        //             <h1 className="font-weight-bold big-text">No Tournaments</h1>
        //         </div></>
        //     }
        // </div>
    );
}

