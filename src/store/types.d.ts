export interface Resume {
    id: any
    fullname: String
    title: String;
    personalInfo: PersonalInfo;
    summary: String
    experience: Experience[],
    education: Education[],
    skills: Skill[]
}

export interface Education {
    id: any
    school: String,
    degree: String,
    year: String
}

export interface PersonalInfo {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
    summary: string;
}

export interface Experience {
    id: any
    company: String,
    role: String,
    duration: String
}

export interface Skill {
    id: string;
    name: string;
    level: number; // 1-5
}


export interface ResumeContext {
    resumes: Resume[];
    currentResume: Resume | null;
    setCurrentResume: (resume: Resume | null) => void;
    addResume: (resume: Resume) => void;
    updateResume: (updatedResume: Resume) => void;
    deleteResume: (id: string) => void;
    activeSection: string;
    setActiveSection: (section: string) => void;
}
