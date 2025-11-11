import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../routes/HomePage"
import FilmsPage from "../routes/FilmsPage"
import SingleFilmPage from "../routes/SingleFilmPage"
import AdminPage from "../routes/AdminPage"
import DefaultLayout from "../layouts/DefaultLayout"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/films/:id" element={<SingleFilmPage />} />
            <Route path="/admin" element={<AdminPage />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
