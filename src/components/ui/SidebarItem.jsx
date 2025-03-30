import React from 'react'
import { Link, useLocation } from 'react-router';


/**
 * A customizable Sidebar nav component using DaisyUI with dark mode support.
 *
 * @param {string} [props.href] - Route for the sidebar item.
 * @param {string} [props.className=""] - Additional Tailwind CSS classes for styling.
 *
 * @param {JSX.Element} [props.icon] - Icon displayed beside label
 * @param {string} [props.label] - Sidebar item label
 * @param {function} props.onClick - Callback function triggered on button click.
 * @param {React.ReactNode} props.children - The content inside the button.
 *
 * @returns {JSX.Element} The customized DaisyUI button component.
 */
export const SidebarItem = ({ href = '#', icon, label, onClick, className = "" }) => {
    const location = useLocation();
    const isActive = href.includes(location.pathname)
    return (
        <li>
            <Link
                to={href}
                onClick={onClick}
                className={`${className} flex items-center py-4 px-2 rounded-md transition-colors duration-200 ${isActive
                    ? 'bg-teal-500 dark:bg-teal-700 text-primary-content'
                    : ' bg-slate-100 hover:bg-base-200'
                    }`}
            >
                {icon && <span className="mr-2">{icon}</span>}
                <span className='lg:text-base'>{label}</span>
            </Link>
        </li>
    );
};
