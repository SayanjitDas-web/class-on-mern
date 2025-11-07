import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"
import { useState } from "react"

function Header() {

  return (
    <header className="flex flex-wrap justify-between items-center my-2 py-4">
        <div>
            <h1>Logo</h1>
        </div>
        <nav className="flex flex-wrap justify-center items-center gap-4">
            <NavLink to="/" className={({isActive}) => ( isActive ? "text-red-600" : "text-black")}>Home</NavLink>
            <NavLink to="/fav" className={({isActive}) => ( isActive ? "text-red-600" : "text-black")}>Fav Recipies</NavLink>
        </nav>
    </header>
  )
}

export default Header