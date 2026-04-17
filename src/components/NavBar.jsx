import { Library, ShoppingCartIcon, User, Search, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const MOCK_BOOKS = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee" },
];


export default function NavBar(){
    const [text, setText] = useState('')
    const [results, setResults] = useState([])
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
                if(text.trim().length > 0){
                    const filtered = MOCK_BOOKS.filter(book => book.title.toLowerCase().includes(text.toLowerCase()))
                    setResults(filtered)
                    setIsDropDownOpen(true)
                }else{
                    setResults([])
                    setIsDropDownOpen(false)
                }
           }, 300)   
        return () => clearTimeout(timeout)
    },[text])


    function handleSubmit(e){
        e.preventDefault()
        setText('')
    }

    return(
        <nav className = "bg-white border-b border-slate-200 px-4 py-3 shadow-sm">
            <div className = 'max-w-7xl mx-auto flex items-center justify-between gap-4'>
                <div className = 'flex items-center gap-2 text-blue-600 font-bold text-xl cursor-pointer'>
                    <Library sixe = {28}/>
                    <span className = "hidden sm:block">BookStore</span>
                </div>
                <ul className = 'hidden md:flex items-center gap-6 text-slate-600 font-medium'> 
                    <li className = "hover:text-blue-600 transition-colors cursor-pointer">Books</li>
                    <li className = "hover:text-blue-600 transition-colors cursor-pointer">Gifts</li>
                </ul>
                <div className = 'flex-1 max-w-md relative'>
                    <form onSubmit = {handleSubmit} className = "relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                        <input 
                            className = "w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-full focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
                            type="text" 
                            value = {text} 
                            onChange = {e => setText(e.target.value)} 
                            placeholder = "Search by Title..." />
                    </form>
                    {
                        isDropDownOpen && results.length > 0 && (
                            <div className = "absolute top-full left-0 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                <ul className = 'max-height-[300px] overflow-y-auto'>
                                    {
                                        results.map(book => (
                                            <li
                                                className = "px-4 py-3 hover:bg-blue-50 flex items-center gap-3 cursor-pointer transition-colors border-b border-slate-50 last:border-none"
                                                onClick = {() => navigate(`/books/:${book.id}`) } 
                                                key = {book.id}
                                            >
                                                <BookOpen size={16} className="text-slate-400" />
                                                <div>
                                                    <p className="text-sm font-medium text-slate-800">{book.title}</p>
                                                    <p className="text-xs text-slate-500">{book.author}</p>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className = "flex items-center gap-4 text-slate-600">
                    <button className = 'p-2 hover:bg-slate-100 rounded-full transition-colors relative" aria-label="Shopping Cart'><ShoppingCartIcon size = {24} /></button>
                    <button className = 'p-2 hover:bg-slate-100 rounded-full transition-colors" aria-label="User Account"'><User size = {24} /></button>
                </div>
            </div>
        </nav>
    )
} 