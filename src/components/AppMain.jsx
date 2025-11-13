import axios from "axios"
import { useState, useEffect, useContext } from "react";
import FilmCard from "./FilmCard";
import GlobalContext from "../context/GlobalContext";

export default function AppMain() {
    const [films, setFilms] = useState([]);
    const { setLoading } = useContext(GlobalContext);
    const filmEndPoint = "http://localhost:3000/api/films/";

    useEffect(() => {
        setLoading(true);
        axios
            .get(filmEndPoint)
            .then(res => {
                setFilms(res.data);
            })
            .catch(err => {
                console.error("Errore nel caricamento dei film:", err.message);
            })
            .then(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <main className="container py-4">
                <h2 className="mb-4">Lista Film</h2>
                <div className="row g-4">
                    {films.map(film => (
                        <FilmCard key={film.id} film={film} />
                    ))
                    }
                </div>
            </main>
        </>
    )
}