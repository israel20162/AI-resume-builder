import { useLocation, Link } from "react-router";
import { useEffect } from "react";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className=" flex mt-[25vh]  justify-center dark:bg-gray-900 dark:text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
                <Link to="/" className="text-teal-500 hover:text-teal-600 underline">
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;