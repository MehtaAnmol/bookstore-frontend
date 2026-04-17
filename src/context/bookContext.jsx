import { createContext, useEffect, useState } from "react";

export const BookContext = createContext()

export const BookProvider = ({children}) => {
    const [books, setBooks] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchBooks(){
            try{
                const response = await fetch('http://localhost:3000/api/v1/books')
                const result = await response.json()
                if(!response.ok){
                    const errMessage = result.message
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