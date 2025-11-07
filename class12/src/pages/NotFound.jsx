import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <h1 className="flex-col justify-center items-center">
        <p className="text-6xl text-center">404</p>
        <p className="text-4xl text-center">Page not found</p>
        <div className="flex justify-center items-center p-4 my-2">
            <Link to="/" className="underline">Go to Home</Link>
        </div>
      </h1>
    </div>
  );
}

export default NotFound;
