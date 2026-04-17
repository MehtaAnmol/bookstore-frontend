import { createContext, useEffect, useState } from "react";

export const BookContext = createContext()

export const BookProvider = ({children}) => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const VITE_API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        async function fetchBooks(){
            setError(null)
            try{
                const response = await fetch(VITE_API_URL)
                const result = await response.json()
                if(!response.ok){
                    const errMessage = result?.data?.message || result?.message || "Something went wrong"
                    throw new Error(errMessage)
                }
                setBooks(result.books)
                setError(null)
            }catch(err){
                setError(err.message)
                setBooks([])
            }finally{
                setLoading(false)
            }
        }
        fetchBooks()
    }, [])
    return(
        <BookContext.Provider value = {{books, loading, error}}>
            {children}
        </BookContext.Provider>
    )
}