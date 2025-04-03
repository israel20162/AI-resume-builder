import { useRef, useState } from 'react';
import { Save, Download, FileText, Briefcase, GraduationCap, Code, Award, Upload } from 'lucide-react';
import { Button } from '../components/ui/Button';
import EducationForm from '../components/resume/EducationForm'
import ExperienceForm from '../components/resume/ExperienceForm';
export default function ResumeBuilder() {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [activeSection, setActiveSection] = useState()
    const [currentResume, setCurrentResume] = useState({title:'',updatedAt: new Date(123)});
    const [isSaving, setIsSaving] = useState(false);
    const navItems = [
        { id: 'personalInfo', name: 'Personal Info', icon: <FileText className="w-5 h-5" /> },
        { id: 'experience', name: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
        { id: 'education', name: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
        { id: 'skills', name: 'Skills', icon: <Code className="w-5 h-5" /> },
        { id: 'projects', name: 'Projects', icon: <Award className="w-5 h-5" /> },
    ];
    const handleSaveResume = () => {
        if (!currentResume) return;

        setIsSaving(true);

        // Update the resume with current timestamp
        const updatedResume = {
            ...currentResume,
            updatedAt: new Date()
        };

      

        // Simulate API call delay
        setTimeout(() => {
            setIsSaving(false);
        }, 1000);
    };

    const renderActiveSection = () => {
        if (!currentResume) return null;

        switch (activeSection) {
            // case 'personalInfo':
            //     return <PersonalInfoForm />;
            case 'experience':
                return <ExperienceForm />;
            case 'education':
                return <EducationForm />;
            // case 'skills':
            //     return <SkillsForm />;
            // case 'projects':
            //     return <ProjectsForm />;
            // default:
            //     return <PersonalInfoForm />;
        }
    };
    // if (!currentResume) {
    //     return (
    //         <div className="flex items-center justify-center h-full">
    //             <p className="text-gray-500">No resume selected.</p>
    //         </div>
    //     );
    // }

    return (
        <>
            {/* Top bar with actions */}
            <div className=" sm:px-6 flex justify-between items-center flex-wrap gap-2 dark:text-white">
                <div className="flex items-center space-x-2">
                    <h1 className="text-lg font-medium text-gray-900">{currentResume.title}</h1>
                    <span className="text-sm text-gray-500 dark:text-gray-300">
                        Last edited: {currentResume.updatedAt.toLocaleDateString()}
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        className="inline-flex items-center px-3 !py-2  dark:bg-white dark:!text-gray-700 leading-4  "
                        onClick={() => { }}
                    >
                        <Download className="h-4 w-4 mr-2" />
                        Export PDF
                    </Button>
                    <Button
                        className={`inline-flex bg-teal-500 dark:bg-teal-700 text-white ${isSaving ? 'opacity-75 cursor-not-allowed' : ''
                            }`}
                        onClick={handleSaveResume}
                        disabled={isSaving}
                    >
                        <Save className="h-4 w-4 mr-2" />
                        {isSaving ? 'Saving...' : 'Save Resume'}
                    </Button>
                </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 flex mt-2 bg-gray-50 dark:bg-transparent dark:text-white">
                {/* Left sidebar - Section Navigation */}
                <div className="w-64  border-r border-gray-200/30 bg-white dark:bg-transparent dark:text-white overflow-y-auto flex flex-col">
                    <nav className="flex-1 px-2 py-4 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className={`${activeSection === item.id
                                    ? 'bg-gray-200  text-gray-900  dark:bg-gray-700'
                                    : 'text-gray-600  hover:bg-gray-50 hover:text-gray-900'
                                    } group dark:text-white flex items-center px-3 py-3 text-sm font-medium rounded-md w-full`}
                                onClick={() => setActiveSection(item.id)}
                            >
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* Template selector in sidebar */}
                    <div className="border-t border-gray-200/30 p-4">
                        <h3 className="text-sm font-medium text-gray-500 mb-3">Resume Template</h3>
                        {/* <TemplateSelector /> */}
                    </div>
                </div>

                {/* Main form area */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-3xl mx-auto">
                        {renderActiveSection()}
                    </div>
                </div>

                {/* Right sidebar - Preview */}
                <div className="hidden lg:block lg:w-96 border-l border-gray-200 bg-white overflow-y-auto">
                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                        <h3 className="text-sm font-medium text-gray-500">Live Preview</h3>
                    </div>
                    <div className="p-4">
                        {/* <ResumePreview /> */}
                    </div>
                </div>
            </div>
         

        </>

    );
}
