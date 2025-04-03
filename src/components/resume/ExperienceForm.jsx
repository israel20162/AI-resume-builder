import { useState, useEffect } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { useResumeStore } from '../../store/store';
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea';
import { Label } from '../ui/Label';
import { Button } from '../ui/Button'
const ExperienceForm = () => {
    const currentResume = useResumeStore(state => state.currentResume)
    const updateResume = useResumeStore(state => state.updateResume)
    const [experiences, setExperiences] = useState([]);
    const [activeExperience, setActiveExperience] = useState(null);

    useEffect(() => {
        if (currentResume) {
            setExperiences(currentResume.experience);
            if (currentResume.experience.length > 0) {
                setActiveExperience(currentResume.experience[0].id);
            }
        }
    }, [currentResume]);

    const handleChange = (id, field, value) => {
        const updatedExperiences = experiences.map((exp) =>
            exp.id === id ? { ...exp, [field]: value } : exp
        );
       
        setExperiences(updatedExperiences);
    };

    const handleAddExperience = () => {
        const newExperience = {
            id: `exp-${Date.now()}`,
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            duration: ''
        };
       
        const updatedExperiences = [...experiences, { ...newExperience, duration: `${newExperience.startDate}-${newExperience.endDate}` }];
        setExperiences(updatedExperiences);
        setActiveExperience(newExperience.id);

        if (currentResume) {
            updateResume({
                ...currentResume,
                experience: updatedExperiences,
                updatedAt: new Date(),
            });
        }
    };

    const handleRemoveExperience = (id) => {
        const updatedExperiences = experiences.filter((exp) => exp.id !== id);
        setExperiences(updatedExperiences);

        if (id === activeExperience && updatedExperiences.length > 0) {
            setActiveExperience(updatedExperiences[0].id);
        } else if (updatedExperiences.length === 0) {
            setActiveExperience(null);
        }

        if (currentResume) {
            updateResume({
                ...currentResume,
                experience: updatedExperiences,
                updatedAt: new Date(),
            });
        }
    };

    const handleSaveChanges = () => {
        if (currentResume) {
            updateResume({
                ...currentResume,
                experience: experiences,
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
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Work Experience</h2>
                <Button
                    type="button"
                    onClick={handleAddExperience}
                    className="inline-flex items-center px-3 py-2 dark:bg-transparent dark:hover:bg-gray-800"
                >
                    <PlusCircle className="h-4 w-4 mr-1" />
                    Add Experience
                </Button>
            </div>

            {experiences.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 dark:bg-transparent rounded-lg">
                    <p className="text-gray-500 dark:text-gray-700">No work experience added yet.</p>
                    <button
                        type="button"
                        onClick={handleAddExperience}
                        className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100 focus:outline-none"
                    >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add your first work experience
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar with experience list */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-transparent dark:text-white shadow-sm rounded-lg">
                            <ul className="divide-y dark:divide-gray-700 divide-gray-200">
                                {experiences.map((exp) => (
                                    <li
                                        key={exp.id}
                                        className={`px-4 py-3 cursor-pointer ${activeExperience === exp.id ? ' border-l-2 border-teal-500 dark:border-teal-700 border-b-gray-300 dark:border-b-gray-700' : ''
                                            }`}
                                        onClick={() => setActiveExperience(exp.id)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="truncate">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                    {exp.role || 'New Position'}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-600 truncate">
                                                    {exp.company || 'Company Name'}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                className="text-gray-400 hover:text-red-500"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveExperience(exp.id);
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

                    {/* Experience form */}
                    {activeExperience && (
                        <div className="lg:col-span-3">
                            <div className="bg-white dark:bg-transparent shadow-sm rounded-lg border border-gray-200 dark:border-gray-700">
                                <div className="border-b border-gray-200 bg-gray-50 dark:bg-transparent dark:border-gray-700 px-4 py-4 sm:px-6">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white ">Edit Experience</h3>
                                </div>
                                <div className="px-4 py-5 sm:p-6">
                                    {experiences.map((exp) => (
                                        exp.id === activeExperience && (
                                            <div key={exp.id} className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                {/* Job Title / Position */}
                                                <div className="sm:col-span-3">
                                                    <Label htmlFor={`role-${exp.id}`} className="">
                                                        Job Title / Position
                                                    </Label>
                                                    <div className="mt-1">
                                                        <Input
                                                            type="text"
                                                            id={`role-${exp.id}`}
                                                            value={exp.role}
                                                            onChange={e => handleChange(exp.id, 'role', e.target.value)}
                                                            className=""
                                                            placeholder="Software Engineer"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Company */}
                                                <div className="sm:col-span-3">
                                                    <label htmlFor={`company-${exp.id}`} className="">
                                                        Company
                                                    </label>
                                                    <div className="mt-1">
                                                        <Input
                                                            type="text"
                                                            id={`company-${exp.id}`}
                                                            value={exp.company}
                                                            onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                                                            className=""
                                                            placeholder="Google"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Location
                                                <div className="sm:col-span-3">
                                                    <label htmlFor={`location-${exp.id}`} className="">
                                                        Location
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            id={`location-${exp.id}`}
                                                            value={exp.location}
                                                            onChange={(e) => handleChange(exp.id, 'location', e.target.value)}
                                                            className=""
                                                            placeholder="San Francisco, CA"
                                                        />
                                                    </div>
                                                </div> */}

                                                {/* Start Date */}
                                                <div className="sm:col-span-3">
                                                    <label htmlFor={`startDate-${exp.id}`} className="">
                                                        Start Date
                                                    </label>
                                                    <div className="mt-1">
                                                        <Input
                                                            type="text"
                                                            id={`startDate-${exp.id}`}
                                                            value={exp.startDate}
                                                            onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                                                            className=""
                                                            placeholder="Jan 2020"
                                                        />
                                                    </div>
                                                </div>

                                                {/* End Date / Current */}
                                                <div className="sm:col-span-3">
                                                    <div className="flex justify-between">
                                                        <Label htmlFor={`endDate-${exp.id}`} className="">
                                                            End Date
                                                        </Label>
                                                        <div className="flex items-center">
                                                            <input
                                                                id={`current-${exp.id}`}
                                                                name={`current-${exp.id}`}
                                                                type="checkbox"
                                                                checked={exp.current}
                                                                onChange={(e) => handleChange(exp.id, 'current', e.target.checked)}
                                                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                                            />
                                                            <Label htmlFor={`current-${exp.id}`} className="ml-2 block text-sm text-gray-700 dark:text-white">
                                                                Current job
                                                            </Label>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <Input
                                                            type="text"

                                                            id={`endDate-${exp.id}`}
                                                            value={exp.endDate}
                                                            onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                                                            disabled={exp.current}
                                                            className={`${exp.current ? 'bg-gray-100' : ''
                                                                }`}
                                                            placeholder="Present"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className="sm:col-span-6">
                                                    <Label htmlFor={`description-${exp.id}`} className="">
                                                        Job Description
                                                    </Label>
                                                    <div className="mt-1">
                                                        <Textarea
                                                            id={`description-${exp.id}`}
                                                            rows={4}
                                                            value={exp.description}
                                                            onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                                                            className=""
                                                            placeholder="Describe your responsibilities and achievements..."
                                                        />
                                                    </div>
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Use bullet points and quantify your achievements when possible.
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
    );
};

export default ExperienceForm;