import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function DashBoard() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/films")
            .then(res => {
                console.log(res.data)
                setFilms(res.data);
            })
            .catch(err => console.error("Errore nel caricamento dei film:", err));
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/api/films/${id}`)
            .then(res => {
                console.log(res.data.message);
                setFilms(prevFilms => prevFilms.filter(film => film.id !== id));
            })
            .catch(err => console.error("Errore nella cancellazione:", err));
    };


    return (
        <>
            <div className="container p-5 table-responsive">
                <div className="banner bg-light-subtle p-3 mb-4">
                    <div className="container d-flex justify-content-between align-items-center">
                        <h3>Admin Dashboard</h3>
                        <Link to="/admin/film/create" className="btn btn-dark">
                            <i className="bi bi-plus-lg me-2"></i> Film
                        </Link>
                    </div>
                </div>
                <table className="table table-striped table-hover align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Director</th>
                            <th scope="col">Cover Image</th>
                            <th scope="col">Synopsis</th>
                            <th scope="col">Release Date</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {films.map(film => (
                            <tr key={film.id}>
                                <td>{film.name}</td>
                                <td>{film.director}</td>
                                <td><img src={`http://localhost:3000${film.cover_image}`} alt={film.name} style={{ width: "50px" }} /></td>
                                <td className="text-truncate" style={{ maxWidth: "250px" }}>{film.synopsis}</td>
                                <td>{new Date(film.release_date).toLocaleDateString()}</td>
                                <td>{film.duration}</td>
                                <td>{film.language}</td>
                                <td>
                                    <div className="d-flex justify-content-between gap-2">
                                        <button className="btn btn-sm btn-success">
                                            <Link to={`/films/${film.id}`} className="text-white text-decoration-none">
                                                <i class="bi bi-eye"></i>
                                            </Link>
                                        </button>
                                        <button className="btn btn-sm btn-warning"><i class="bi bi-pencil"></i></button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(film.id)}><i class="bi bi-trash3"></i></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}