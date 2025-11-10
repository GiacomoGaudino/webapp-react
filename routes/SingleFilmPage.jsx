import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SingleFilmPage() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/films/${id}`)
            .then(res => setFilm(res.data))
            .catch(err => console.error("Errore nel caricamento del film:", err));
    }, [id]);

    if (!film) return <p className="text-center py-5">Caricamento...</p>;

    return (
        <div className="container py-5">
            <div className="card mx-auto" style={{ maxWidth: "800px" }}>
                <img
                    src={`http://localhost:3000${film.cover_image}`}
                    alt={film.name}
                    className="card-img-top film-detail-img"
                    style={{ maxHeight: "1200px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h2 className="card-title">{film.name}</h2>
                    <h5 className="text-muted mb-3">Regista: {film.director}</h5>
                    <p className="card-text">{film.synopsis}</p>
                    <ul className="list-unstyled">
                        <li><strong>Data di uscita:</strong> {new Date(film.release_date).toLocaleDateString()}</li>
                        <li><strong>Durata:</strong> {film.duration} min</li>
                        <li><strong>Lingua:</strong> {film.language}</li>
                    </ul>
                    <div className="mt-4">
                        <h4>Recensioni</h4>
                        {film.review && film.review.length > 0 ? (
                            <div className="row g-3">
                                {film.review.map(r => (
                                    <div className="col-12" key={r.id}>
                                        <div className="card border-secondary p-3 shadow-sm">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <strong>{r.username}</strong>
                                                <span className="badge bg-primary">
                                                    {r.average_rating ? parseFloat(r.average_rating).toFixed(1) : "N/A"}/5
                                                </span>
                                            </div>
                                            <p className="mb-0">{r.review}</p>
                                            <small className="text-muted">
                                                {new Date(r.created_at).toLocaleDateString()}
                                            </small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>Nessuna recensione disponibile.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}