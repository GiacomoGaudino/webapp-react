import AppJumbotron from "../components/AppJumbotron.jsx";
import sfondo from "../assets/img/sfondo.jpg";

export default function HomePage() {

    return (
        <>
            <AppJumbotron />
            <section className="position-relative py-5 d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                <div className="position-relative" style={{ width: "500px", height: "400px" }}>
                    <div
                        className="position-absolute rounded shadow-lg overflow-hidden"
                        style={{
                            width: "420px",
                            height: "280px",
                            top: "50px",
                            left: "50px",
                            zIndex: 4
                        }}
                    >
                        <img
                            src={sfondo}
                            alt="Featured film"
                            className="img-fluid w-100 h-100"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div
                        className="position-absolute rounded bg-danger"
                        style={{
                            width: "350px",
                            height: "280px",
                            top: "20px",
                            left: "-50px",
                            zIndex: 3,
                        }}
                    ></div>
                    <div
                        className="position-absolute rounded bg-success"
                        style={{
                            width: "280px",
                            height: "250px",
                            top: "200px",
                            left: "70px",
                            zIndex: 1,
                        }}
                    ></div>
                    <div
                        className="position-absolute rounded bg-warning"
                        style={{
                            width: "320px",
                            height: "250px",
                            top: "150px",
                            left: "300px",
                            zIndex: 2,
                        }}
                    ></div>
                </div>
            </section>
        </>
    )
}