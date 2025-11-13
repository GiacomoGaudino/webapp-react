import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import StarRating from "../src/components/StarRating";

export default function SingleFilmPage() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({
        username: "",
        review: "",
        average_rating: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/api/films/${id}`)
            .then(res => setFilm(res.data))
            .catch(err => console.error("Errore nel caricamento del film:", err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios.post(`http://localhost:3000/api/films/${id}/reviews`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(() => {
                setFormData({
                    username: "",
                    review: "",
                    average_rating: ""
                });
                return axios.get(`http://localhost:3000/api/films/${id}`);
            })
            .then(res => setFilm(res.data))
            .catch(err => console.error("Errore nell'invio della recensione:", err));
    }

    if (!film) return <p className="text-center py-5">Caricamento...</p>;

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-4 d-flex flex-column flex-md-row gap-4 align-items-start px-md-5">
                    <div className="cover col-12 col-md-4 position-relative" style={{ maxWidth: "350px", maxHeight: "500px", overflow: "hidden" }}>
                        <img
                            className="img-fluid rounded shadow"
                            src={`http://localhost:3000${film?.cover_image}`}
                            alt={film?.name}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                        <div
                            className="position-absolute top-0 end-0 m-3 bg-dark bg-opacity-50 p-2 rounded"
                            style={{ zIndex: 2 }}
                        >
                            <StarRating average_rating={film.avg} />
                        </div>
                    </div>
                    <div className="details col-12 col-md-8">
                        <h2 className="display-6 fw-bold mb-2">{film?.name}</h2>
                        <div className="text-muted mb-2">
                            🎬 <strong>Regista:</strong> {film?.director}
                        </div>
                        <ul className="list-unstyled small mb-2">
                            <li><strong>Data di uscita:</strong> {new Date(film?.release_date).toLocaleDateString()}</li>
                            <li><strong>Durata:</strong> {film?.duration} min</li>
                            <li><strong>Lingua:</strong> {film?.language}</li>
                        </ul>
                        <p className="lead" style={{ textAlign: "justify" }}>{film?.synopsis}</p>
                    </div>
                </div>
            </div>
            <section className="mb-5">
                <div className="container">
                    <h3 className="mb-4">Lascia la tua recensione</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Il tuo nome</label>
                            <input
                                name="username"
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="anonimo"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">La tua recensione</label>
                            <textarea
                                name="review"
                                className="form-control"
                                id="review"
                                rows="3"
                                value={formData.review}
                                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="average_rating" className="form-label">Il tuo voto</label>
                            <select
                                name="average_rating"
                                className="form-select"
                                id="average_rating"
                                value={formData.average_rating}
                                onChange={(e) => setFormData({ ...formData, average_rating: e.target.value })}
                            >
                                <option value="">-- Seleziona un voto --</option>
                                <option value="1">⭐ 1 - Pessimo</option>
                                <option value="2">⭐⭐ 2 - Così così</option>
                                <option value="3">⭐⭐⭐ 3 - Buono</option>
                                <option value="4">⭐⭐⭐⭐ 4 - Molto buono</option>
                                <option value="5">⭐⭐⭐⭐⭐ 5 - Eccellente</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Invia recensione
                        </button>
                    </form>
                </div>
                <hr className="w-25 mx-auto pt-5 my-5" />
                <div className="container">
                    <h4 className="mb-4">Recensioni</h4>
                    {film?.review && film.review.length > 0 ? (
                        <div className="row g-3">
                            {film.review.map((r) => (
                                <div className="col-12" key={r.id}>
                                    <div className="card border-secondary p-3 shadow-sm">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <strong>{r.username}</strong>
                                            <StarRating average_rating={r.average_rating} />
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
                        <p className="text-muted">Nessuna recensione disponibile.</p>
                    )}
                </div>
            </section>
        </>
    );
}