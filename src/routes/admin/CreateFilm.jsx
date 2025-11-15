import axios from "axios";
import { useState } from "react";

export default function CreateFilm() {
    const initialFormData = {
        name: "",
        director: "",
        coverImage: null,
        synopsis: "",
        release_date: "",
        duration: "",
        language: ""
    };
    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("director", formData.director);
        data.append("cover_image", formData.coverImage);
        data.append("synopsis", formData.synopsis);
        data.append("release_date", formData.release_date);
        data.append("duration", formData.duration);
        data.append("language", formData.language);

        axios.post("http://localhost:3000/api/films", data)
            .then(res => {
                console.log("Film created successfully:", res.data);
                if (res.status === 201) {
                    setFormData(initialFormData);
                    setSuccessMessage("Film created successfully!");
                    setTimeout(() => setSuccessMessage(""), 3000);
                }
            })
            .catch(err => console.error("Errore nella creazione del film:", err));
    }

    return (
        <>
            <div className="container banner bg-light-subtle p-3 my-4">
                <h3>Create Film</h3>
            </div>
            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}

            <div className="container">
                <h2 className="h4 mb-3 text-muted">Add New Film</h2>

                <div className="card p-3">
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="director" className="form-label">Director</label>
                            <input type="text" className="form-control" id="director" name="director" value={formData.director} onChange={e => setFormData({ ...formData, director: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="coverImage" className="form-label">Cover Image</label>
                            <input type="file" className="form-control" id="coverImage" name="coverImage" onChange={e => setFormData({ ...formData, coverImage: e.target.files[0] })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="synopsis" className="form-label">Synopsis</label>
                            <textarea className="form-control" id="synopsis" name="synopsis" rows="4" value={formData.synopsis} onChange={e => setFormData({ ...formData, synopsis: e.target.value })}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="releaseDate" className="form-label">Release Date</label>
                            <input type="date" className="form-control" id="releaseDate" name="release_date" value={formData.release_date} onChange={e => setFormData({ ...formData, release_date: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="duration" className="form-label">Duration (minutes)</label>
                            <input type="number" className="form-control" id="duration" name="duration" min="1" value={formData.duration} onChange={e => setFormData({ ...formData, duration: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="language" className="form-label">Language</label>
                            <input type="text" className="form-control" id="language" name="language" value={formData.language} onChange={e => setFormData({ ...formData, language: e.target.value })} />
                        </div>
                        <button type="submit" className="btn btn-dark">Add Film</button>
                    </form>
                </div>
            </div></>
    )
}