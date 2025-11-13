import { Link } from "react-router-dom";

export default function FilmCard({ film }) {

    return (
        <div className="col-md-4">
            <div className="card h-100 d-flex flex-column">
                <Link to={`/films/${film.id}`}>
                    <img
                        src={`http://localhost:3000${film.cover_image}`}
                        className="card-img-top"
                        alt={film.name}
                        style={{ height: "600px", objectFit: "cover" }}
                    />
                </Link>
                <div className="card-body d-flex flex-column">
                    <Link to={`/films/${film.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <h4 className="card-title text-dark fw-bold">{film.name}</h4>
                    </Link>
                    <h6 className="card-subtitle mb-2 text-muted">{film.director}</h6>
                    <p className="card-text" style={{ textAlign: "justify" }}>{film.synopsis}</p>
                    <ul className="list-unstyled mt-auto fw-medium">
                        <li><strong>Data di uscita:</strong> {new Date(film.release_date).toLocaleDateString()}</li>
                        <li><strong>Durata:</strong> {film.duration} min</li>
                        <li><strong>Lingua:</strong> {film.language}</li>
                    </ul>
                    <div className="d-flex justify-content-end">
                        <Link to={`/films/${film.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <button className="btn btn-dark">Dettagli
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}