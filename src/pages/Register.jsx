import React, { useState } from 'react'
import { Link } from 'react-router';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }
    return (
        <div className="h-screen flex items-center justify-center dark:bg-gray-900">
            <div className="max-w-md w-full p-6 md:p-8 card dark:bg-gray-800 rounded-lg shadow-lg dark:border dark:border-gray-700">
                {/* Title */}
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        Create an Account
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Sign up to get started with our platform.
                    </p>
                </div>

                {/* Form */}
                <div className="mt-6">
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
                                Name
                            </label>
                            <Input
                                type="text"
                                required
                                id="name"
                                name="name"
                                className="w-full py-2 px-3  rounded-md "
                                placeholder="Your name"
                               
                                onValueChange={setName}
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full py-2 px-3  rounded-md "
                                placeholder="Your email address"
                              
                                onValueChange={setEmail}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="password">
                                Password
                            </label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full py-2 px-3  rounded-md "
                                placeholder="Your password"
                               
                                onValueChange={setPassword}
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full  text-white py-2 px-4  bg-teal-500 hover:bg-teal-600 disabled:opacity-50 dark:bg-teal-800 hover:dark:bg-teal-700  transition"
                        >
                            Sign up
                        </Button>
                    </form>

                    {/* Login Link */}
                    <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                        Already have an account?{" "}
                        <Link to="/login" className="text-teal-500 hover:underline">
                            Log in here
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
