export default function AppFooter() {

    return (
        <>
            <div className="bg-dark text-light text-center py-3 mt-5">
                <div className="container">
                    <p className="mb-1">&copy; {new Date().getFullYear()} My Films Website. Tutti i diritti riservati.</p>
                    <small>Creato con ❤️ da Giacomo Gaudino</small>
                </div>
            </div>
        </>
    )
}