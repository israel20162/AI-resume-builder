import { useState } from 'react'
import { Link } from 'react-router'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'


export default function Login() {
    const [email, setEmail] = useState('')
    const [loading,] = useState(false)
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = () => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
    }
    return (
        <div className="h-screen flex items-center justify-center  dark:bg-gray-900">
            <div className="max-w-md w-full p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:border dark:border-gray-700">
                {/* Title */}
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        Log in to Your Account
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Welcome back! Log in to access your account.
                    </p>
                </div>

                {/* Form */}
                <div className="mt-6">
                    <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full py-2 px-3 rounded-md"
                                placeholder="Your email address"

                                onChange={setEmail}
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
                                className="w-full py-2 px-3 rounded-md "
                                placeholder="Your password"

                                onChange={setPassword}
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            disabled={loading}
                            type="submit"
                            className="w-full text-white py-2 px-4 bg-teal-500 hover:bg-teal-600 disabled:opacity-50 dark:bg-teal-800 hover:dark:bg-teal-700  transition"
                        >
                            {loading ? "Logging in..." : "Log in"}
                        </Button>

                        {/* Error Message */}
                        {error && <span className="text-red-500 font-bold block mt-2">{error}</span>}
                    </form>

                    {/* Register Link */}
                    <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-teal-500 hover:underline">
                            Register here
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
