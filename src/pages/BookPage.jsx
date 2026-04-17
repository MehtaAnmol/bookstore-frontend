import { useContext } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { BookContext } from "../context/bookContext"
import { ArrowLeft, ShoppingBag, ShieldCheck, Share2, Star, MessageSquare, Zap } from "lucide-react"

export default function BookPage(){
    const {books, loading, error} = useContext(BookContext)
    const {bookId} = useParams()
    const navigate = useNavigate()

    if(loading){
     return <div className = "flex justify-center items-center h-screen text-blue-600 font-medium">
            Loading your next favorite read....
        </div>
    }
        
    if(error) return (
        <div className = "p-8 text-center text-red-500">
            Error : {error}
        </div>
    )
    
    const book = books.find(book => book._id === bookId)
    if(!book){ 
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4"></div>
        )
    }
    
    return(
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-slate-500">
                <Link to = '/' className = 'hover:text-black' >Home</Link>
                <span className="mx-2">/</span>
                <span className="text-slate-900 font-medium">{book.title}</span>
            </div>
            
            <main className = "max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
               <div className = "lg:col-span-5 flex gap-4">
                    <div className = "hidden sm:flex flex-col gap-3">
                        <div className = "w-16 h-20 border-2 border-blue-500 rounded p-1 cursor-pointer">
                            <img src = '#' alt = "thumb" className = "w-full h-full object-cover" />
                        </div>
                    </div>
                    
                    <div className="flex-1 bg-white border border-slate-100 rounded-lg p-8 flex justify-center items-center shadow-sm">
                        <img 
                            src={book.imageUrl} 
                            alt={book.title} 
                            className="max-h-[500px] w-auto object-contain shadow-xl" 
                        />
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 leading-tight">
                                {book.title}
                            </h1>
                            <p className="text-blue-600 font-medium mt-1 cursor-pointer hover:underline">
                                {book.authors}
                            </p>
                        </div>
                        <button className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
                            <Share2 size={20} className="text-slate-600" />
                        </button>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-slate-600 font-medium"> {book.reviews?.length ?? 0} review</span>
                        </div>
                        <div className="h-4 w-px bg-slate-300"></div>
                        <div className="flex items-center gap-1 text-slate-500">
                            <MessageSquare size={16} />
                            <span>No questions</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {book.tags?.map(tag => (
                            <span key={tag} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-slate-900">₹{book.price}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">(Incl. of all taxes)</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <button className="flex-1 bg-[#ffda3a] hover:bg-[#f2cd2d] py-4 rounded-lg flex justify-center items-center gap-2 font-bold text-slate-900 transition-all shadow-sm">
                            <ShoppingBag size={20} />
                            Add to Bag
                        </button>
                        <button className="flex-1 bg-white border border-slate-300 hover:border-slate-800 py-4 rounded-lg flex justify-center items-center gap-2 font-bold text-slate-900 transition-all">
                            Buy Now
                            <Zap size={18} />
                        </button>
                    </div>

                </div>
            </main>
        </div>
        
    )
}