import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../routes/HomePage"
import FilmsPage from "../routes/FilmsPage"
import SingleFilmPage from "../routes/SingleFilmPage"
import DefaultLayout from "../layouts/DefaultLayout"
import DashBoard from "../routes/admin/DashBoard"
import AdminLayout from "../layouts/AdminLayout"
import CreateFilm from "../routes/admin/CreateFilm"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<DashBoard />} />
            <Route path="/admin/film/create" element={<CreateFilm />} />
          </Route>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/films/:id" element={<SingleFilmPage />} />
            <Route path="*" element={<h1 className="text-center py-5">404 - Pagina non trovata</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
