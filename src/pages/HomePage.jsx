import { Sparkles } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router";
import { Upload } from 'lucide-react';
import { useRef, useState } from 'react';
export default function Home() {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(file);
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        skills: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // Here you can send data to the backend
    };

    return (
        <div className="relative overflow-hidden bg-background flex flex-1 flex-col ">

            {/* Hero Section */}
            <section className="w-full  py-6 md:py-8 lg:py-12 xl:py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-amber-50">
                                    <span className="gradient-text">AI-Powered</span> Resume Builder
                                    <br /> for your <span className="gradient-text">Dream Job</span>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-lg py-4 text-slate-700 dark:text-slate-100">
                                    Create professional, ATS-friendly resumes in minutes with our AI-powered resume builder. Stand out from the competition with tailored content.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link className="bg-background" size="lg">
                                    <Button className="text-white bg-teal-500 dark:bg-teal-700" size="lg">
                                        View Demo
                                    </Button>

                                </Link>
                                {/* <Button variant="outline" size="lg">
                  View Demo
                </Button> */}
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative w-full h-[350px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3/4 h-3/4 bg-background rounded-lg shadow-lg p-6 flex flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="flex-1 flex items-center justify-center">
                                            <div className="relative">
                                                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                                    <Sparkles className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                                    <Sparkles className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="md:w-80 md:h-32 rounded-xl bg-primary/10 flex items-center justify-center">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                                        alt="AI Resume Builder Preview"
                                                        className="rounded-lg shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:text-white">
                <div className="hero min-h-[50vh] ">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Build Your Perfect Resume with AI</h1>
                            <p className="py-6">Upload your existing resume and let our AI analyze and improve it.</p>
                            <input
                                type="file"
                                accept="application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                                className="hidden"
                            />
                            <Button className="bg-teal-500 hover:bg-teal-600 disabled:opacity-50 dark:bg-teal-800 hover:dark:bg-teal-700 shadow-none" onClick={handleButtonClick}>
                                <Upload className="mr-2" /> Upload Resume
                            </Button>
                            {selectedFile && <p className="mt-4">Selected file: {selectedFile.name}</p>}
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}
