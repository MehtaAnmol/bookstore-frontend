import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";
import { BookProvider } from "./context/bookContext";
import BookPage from "./pages/BookPage";
import BookHomePage from "./pages/BooksHomePage";


export default function App(){
  return(
    <>
      <BookProvider>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path = '/' element = {<BookHomePage />}/>
            <Route path = '/books/:bookId' element = {<BookPage/>} />
          </Routes>
        </BrowserRouter>
      </BookProvider>
    </>
  )
}

