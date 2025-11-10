import axios from "axios"
import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

export default function AppMain() {
    const [films, setFilms] = useState([]);
    const filmEndPoint = "http://localhost:3000/api/films/";

    useEffect(() => {
        axios
            .get(filmEndPoint)
            .then(res => {
                setFilms(res.data);
            })
            .catch(err => {
                console.error("Errore nel caricamento dei film:", err.message);
            });
    }, []);

    return (
        <>
            <main className="container py-4">
                <h2 className="mb-4">Lista Film</h2>
                <div className="row g-4">
                    {films.length > 0 ? (
                        films.map(film => (
                            <FilmCard film={film} />
                        ))
                    ) : (
                        <p>Nessun film trovato...</p>
                    )}
                </div>
            </main>
        </>
    )
}