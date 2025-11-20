import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/auth";

function Header() {
  const { user, logout } = useAuth();

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-1 text-lg font-medium transition-all ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">

        <Link to="/" className="text-3xl font-bold text-blue-600">
          Recipe<span className="text-slate-800">Hub</span>
        </Link>

        <nav className="flex items-center gap-6">

          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>

          <NavLink to="/fav" className={navLinkClasses}>
            Favorites
          </NavLink>

          {user ? (
            <>
              <span className="text-lg font-medium text-slate-600">
                Hello, <span className="font-bold">{user.username}</span>
              </span>

              <Button variant="destructive" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>

              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
