import { useNavigate } from "react-router-dom"

export default function BookGrid({books}){

    if(!books || books.length === 0){
        return (
            <div className = "flex justify-center items-center h-64 text-slate-500">
                <p>No books found matching your search.</p>
            </div>
        )
    }
    return(
        <div className = 'max-w-7xl mx-auto px-4 py-8'>
            <div className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    books.map(book => (
                        <BookCard key = {book._id} book = {book} />
                    ))
                }
            </div>
        </div>
    )
}

function BookCard({book}){
    const navigate = useNavigate()
    return(
        <article 
            onClick = {() => navigate(`/books/:${book.id}`)}
            className = "bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col h-full transition-shadow hover:shadow-md"
        >
            <div className = "aspect-[3/4] w-full mb-4 overflow-hidden rounded-lg">
                <img 
                    src = '#' 
                    alt={book.title} 
                    className="w-full h-full object-cover shadow-inner"
                />
            </div>
            <div className = "flex-grow">
                <h3 className = 'font-bold text-slate-900 text-lg leading-tight line-clamp-2'>{book.title}</h3>
                <p className = 'text-slate-500 text-sm mt-1 mb-3'>{book.authors}</p>
                <div className = "flex items-center gap-2 flex-wrap mb-4">
                    <p className = 'text-slate-900 font-bold text-lg'>₹{book.price}</p>
                    <button className = "w-full bg-[#ffda3a] hover:bg-[#f2cd2d] py-3 rounded-xl flex justify-center items-center gap-2 font-bold text-slate-900 transition-colors active:scale-[0.98] cursor-pointer">Add To Bag</button>
                </div>
            </div>
        </article>
    )
}