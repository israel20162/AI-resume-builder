import { useState, useEffect } from 'react';
import { useResumeStore } from '../../store/store';
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { Label } from '../ui/Label';
import { PlusCircle, Trash2 } from 'lucide-react'

const EducationForm = () => {
    const currentResume = useResumeStore(state => state.currentResume)
    const updateResume = useResumeStore(state => state.updateResume)
    const [educations, setEducations] = useState([]);
    const [activeEducation, setActiveEducation] = useState(null);
    useEffect(() => {
        if (currentResume) {
            setEducations(currentResume.education);
            if (currentResume.education.length > 0) {
                setActiveEducation(currentResume.education[0].id);
            }
        }
    }, [currentResume]);

    const handleChange = (id, field, value) => {
        const updatedEducations = educations.map((edu) =>
            edu.id === id ? { ...edu, [field]: value  } : edu
        );
        setEducations(updatedEducations);
    };

    const handleAddEducation = () => {
        const newEducation = {
            id: `edu-${Date.now()}`,
            school: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
            year:'',
            description: '',
        };

        const updatedEducations = [...educations, { ...newEducation, year: `${newEducation.startDate}-${newEducation.endDate}` }];
        setEducations(updatedEducations);
        setActiveEducation(newEducation.id);

        if (currentResume) {
            updateResume({
                ...currentResume,
                education: updatedEducations,
                updatedAt: new Date(),
            });
        }
    };
    const handleRemoveEducation = (id) => {
        const updatedEducations = educations.filter((edu) => edu.id !== id);
        setEducations(updatedEducations);

        if (id === activeEducation && updatedEducations.length > 0) {
            setActiveEducation(updatedEducations[0].id);
        } else if (updatedEducations.length === 0) {
            setActiveEducation(null);
        }

        if (currentResume) {
            updateResume({
                ...currentResume,
                education: updatedEducations,
                updatedAt: new Date(),
            });
        }
    };

    const handleSaveChanges = () => {
        if (currentResume) {
            updateResume({
                ...currentResume,
                education: educations,
                updatedAt: new Date(),
            });
        }
    };
    // if (!currentResume) {
    //     return <div>No resume selected</div>;
    // }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Education</h2>
                <button
                    type="button"
                    onClick={handleAddEducation}
                    className="inline-flex items-center px-3 py-2 dark:bg-transparent dark:hover:bg-gray-800"
                >
                    <PlusCircle className="h-4 w-4 mr-1" />
                    Add Education
                </button>
            </div>

            {educations.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 dark:bg-transparent rounded-lg">
                    <p className="text-gray-500 dark:text-gray-700">No education added yet.</p>
                    <button
                        type="button"
                        onClick={handleAddEducation}
                        className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100 focus:outline-none"
                    >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add your education history
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar with education list */}
                    <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-transparent dark:text-white shadow-sm rounded-lg">
                                <ul className="divide-y dark:divide-gray-700 divide-gray-200">
                                {educations.map((edu) => (
                                    <li
                                        key={edu.id}
                                        className={`px-4 py-3 cursor-pointer ${activeEducation === edu.id ? ' border-l-2 border-teal-500 dark:border-teal-700 border-b-gray-300 dark:border-b-gray-700' : ''
                                            }`}
                                        onClick={() => setActiveEducation(edu.id)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="truncate">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                    {edu.degree || 'New Degree'}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-600 truncate">
                                                    {edu.school || 'Institution Name'}
                                                </p>
                                              
                                            </div>
                                            <button
                                                type="button"
                                                className="text-gray-400 hover:text-red-500"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveEducation(edu.id);
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Education form */}
                    {activeEducation && (
                        <div className="lg:col-span-3">
                                <div className="bg-white dark:bg-transparent shadow-sm rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="border-b border-gray-200 bg-gray-50 dark:bg-transparent dark:border-gray-700 px-4 py-4 sm:px-6">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white ">Edit Education</h3>
                                </div>
                                <div className="px-4 py-5 sm:p-6">
                                    {educations.map((edu) => (
                                        edu.id === activeEducation && (
                                            <div key={edu.id} className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                {/* Institution */}
                                                <div className="sm:col-span-3">
                                                    <Label htmlFor={`institution-${edu.id}`} className="">
                                                        Institution / School
                                                    </Label>
                                                    <div className="mt-1">
                                                        <Input
                                                            type="text"
                                                            id={`school-${edu.id}`}
                                                            value={edu.school}
                                                            onChange={(e) => handleChange(edu.id, 'school', e.target.value)}
                                                            className=""
                                                            placeholder="University of Lagos, Akoka"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Degree */}
                                                <div className="sm:col-span-3">
                                                    <Label htmlFor={`degree-${edu.id}`} className="">
                                                        Degree
                                                    </Label>
                                                    <div className="mt-1">
                                                        <Input
                                                            type="text"
                                                            id={`degree-${edu.id}`}
                                                          
                                                            onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                                                            className=""
                                                            placeholder="Bachelor of Science"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Field of Study */}
                                                <div className="sm:col-span-3">
                                                    <Label htmlFor={`field-${edu.id}`} className="">
                                                        Field of Study
                                                    </Label>
                                                    <div className="mt-1">
                                                        <Input
                                                            type="text"
                                                            id={`field-${edu.id}`}
                                                          
                                                            onChange={(e) => handleChange(edu.id, 'field', e.target.value)}
                                                            className=""
                                                            placeholder="Computer Science"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Start Date */}
                                                <div className="sm:col-span-3">
                                                    <Label htmlFor={`startDate-${edu.id}`} className="">
                                                        Start Date
                                                    </Label>
                                                    <div className="mt-1">
                                                        <Input
                                                            type="text"
                                                            id={`startDate-${edu.id}`}
                                                          
                                                            onChange={(e) => handleChange(edu.id, 'startDate', e.target.value)}
                                                            className=""
                                                            placeholder="2016"
                                                        />
                                                    </div>
                                                </div>

                                                {/* End Date */}
                                                <div className="sm:col-span-3">
                                                    <Label htmlFor={`endDate-${edu.id}`} className="">
                                                        End Date (or Expected)
                                                    </Label>
                                                    <div className="mt-1">
                                                        <Input
                                                            type="text"
                                                            id={`endDate-${edu.id}`}
                                                          
                                                            onChange={(e) => handleChange(edu.id, 'endDate', e.target.value)}
                                                            className=""
                                                            placeholder="2020"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className="sm:col-span-6">
                                                    <Label htmlFor={`description-${edu.id}`} className="">
                                                        Description (Optional)
                                                    </Label>
                                                    <div className="mt-1">
                                                        <Textarea
                                                            id={`description-${edu.id}`}
                                                            rows={3}
                                                         
                                                            onChange={(e) => handleChange(edu.id, 'description', e.target.value)}
                                                            className=""
                                                            placeholder="Add details about your achievements, courses, activities, etc."
                                                        />
                                                    </div>
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Mention relevant coursework, awards, GPA (if notable), or extracurricular activities.
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                                    <div className="bg-gray-50 dark:bg-transparent px-4 py-3 sm:px-6 flex justify-end">
                                    <Button
                                        type="button"
                                        onClick={handleSaveChanges}
                                            className="inline-flex justify-center py-2 px-4 text-white bg-teal-500 dark:bg-teal-700"
                                    >
                                        Save Changes
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default EducationForm;
