import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="flex justify-center gap-3 bg-slate-900 text-slate-100 text-2xl p-5">
            <Link className="hover:text-slate-300" to="/">Home</Link>
            <Link className="hover:text-slate-300" to="/data">Data</Link>
        </div>
    )
}

export default NavBar