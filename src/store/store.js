import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useResumeStore = create(
  persist(
    /** @type {import('./types.d.ts').ResumeContext} */
    (set) =>
      /** @type {import('./types.d.ts').Resume} */ /** @type {import('./types.d.ts').ResumeContext} */
      ({
        user: {},
        fullname: "",
        summary: "",
        experience: [{ id: "", company: "", role: "", duration: "" }],
        education: [{ id: "", school: "", degree: "", year: "" }],
        skills: [{ name: "", level: "1" }],
        resumes: [],
        currentResume: {
          id: "1",
          fullname: "",
          title: "",
          personalInfo: [],
          summary: "",
          experience: [],
          education: [],
          skills: [],
        },
        activeSection: "",

        addResume: (resume) => {
          set((state) => ({ resumes: [...state.resumes, resume] }));
        },
        setCurrentResume: (resume) => {
          set(() => ({ currentResume: resume }));
        },
        setActiveSection: (section) => {
          set(() => ({ activeSection: section }));
        },
        updateResume: (updatedResume) => {
          set((state) => {
            if (
              state.currentResume &&
              state.currentResume.id === updatedResume.id
            ) {
              return { currentResume: updatedResume };
            }
            const updatedResumes = state.resumes.map((resume) =>
              resume.id === updatedResume.id ? updatedResume : resume
            );
            return { resumes: updatedResumes };
          });
        },
        deleteResume: (id) => {
          set((state) => {
            if (state.currentResume && state.currentResume.id === id) {
              return {
                currentResume:
                  filteredResumes.length > 0 ? filteredResumes[0] : null,
              };
            }
            const filteredResumes = resumes.filter(
              (resume) => resume.id !== id
            );
            return { resumes: filteredResumes };
          });
        },
      }),
    {
      name: `resume-store-test`, // Unique name for storage (localStorage key)
      storage: createJSONStorage(() => localStorage), // Define the storage medium (localStorage)
    }
  )
);
