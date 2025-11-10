import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppHeader from "./components/AppHeader"
import HomePage from "../routes/homepage"
import SingleFilmPage from "../routes/SingleFilmPage"
import DefaultLayout from "../layouts/DefaultLayout"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/films/:id" element={<SingleFilmPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
