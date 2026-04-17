import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";

const MOCK_BOOKS = [
  { id: 1, price : 300, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, price : 800, title: "1984", author: "George Orwell" },
  { id: 3, price : 650, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 4, price : 950, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

export default function App(){
  return(
    <>
      <BrowserRouter>
        <NavBar MOCK_BOOKS = {MOCK_BOOKS}/>
        <BookGrid MOCK_BOOKS = {MOCK_BOOKS} />
      </BrowserRouter>
    </>
  )
}