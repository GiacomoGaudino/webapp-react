import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'

export default function Loader() {

    return (
        <div id='loader_wrapper' className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="spinner-border text-primary" role="status">
                <TailChase
                    size="40"
                    speed="1.75"
                    color="white"
                />
            </div>
        </div>
    )
}
