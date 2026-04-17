import { Library, ShoppingCartIcon, User, Search } from "lucide-react"
import { useState } from "react"

export default function NavBar(){
    const [text, setText] = useState('')

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
                <form onSubmit = {handleSubmit} className = "flex-1 max-w-md relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input 
                        className = "w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-full focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
                        type="text" 
                        value = {text} 
                        onChange = {e => setText(e.target.value)} 
                        placeholder = "Search by Title..." />
                </form>
                <div className = "flex items-center gap-4 text-slate-600">
                    <button className = 'p-2 hover:bg-slate-100 rounded-full transition-colors relative" aria-label="Shopping Cart'><ShoppingCartIcon size = {24} /></button>
                    <button className = 'p-2 hover:bg-slate-100 rounded-full transition-colors" aria-label="User Account"'><User size = {24} /></button>
                </div>
            </div>
        </nav>
    )
} 