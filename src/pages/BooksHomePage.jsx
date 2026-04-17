import { useContext } from "react"
import { BookContext } from "../context/bookContext"
import BookPage from "./BookPage"
import BookGrid from "../components/BookGrid"

export default function BookHomePage(){
    const {books, loading, error} = useContext(BookContext)

    if(loading) return <p>Loading Books....</p>
    if(error) return <p>Error encountered!</p>

    return (
        <>
            <BookGrid books = {books}/>
        </>
    )
}