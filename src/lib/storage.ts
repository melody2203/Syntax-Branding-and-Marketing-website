"use client";

// Simple localStorage-based persistence layer for applications and jobs
// This bridges the gap between the careers form and the admin dashboard

export interface Application {
    id: string;
    name: string;
    email: string;
    phone: string;
    portfolio: string;
    role: string;
    status: "New" | "Reviewed" | "Interviewing" | "Rejected";
    appliedAt: string;
}

export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    status: "Active" | "Draft";
    applicants: number;
}

const STORAGE_KEYS = {
    APPLICATIONS: "syntax_applications",
    JOBS: "syntax_jobs",
};

const INITIAL_JOBS: Job[] = [
    {
        id: "1",
        title: "Senior Full-stack Engineer",
        department: "Engineering",
        location: "Remote / Belgrade",
        type: "Full-time",
        salary: "$80k - $120k",
        description: "Join our core team building high-scale fintech applications using Next.js, Node.js and PostgreSQL.",
        status: "Active",
        applicants: 8
    },
    {
        id: "2",
        title: "iOS Developer (Swift/SwiftUI)",
        department: "Engineering",
        location: "Remote",
        type: "Contract",
        salary: "$60/hr - $90/hr",
        description: "Architect and develop premium mobile experiences for our Fortune 500 clients.",
        status: "Active",
        applicants: 4
    },
    {
        id: "3",
        title: "Product Designer",
        department: "Design",
        location: "Belgrade",
        type: "Full-time",
        salary: "$50k - $75k",
        description: "Shape the visual and interactive identity of digital products used by millions.",
        status: "Draft",
        applicants: 0
    }
];

const INITIAL_APPLICATIONS: Application[] = [
    { id: "1", name: "Alex Johnson", email: "alex@example.com", phone: "+1 234 567", portfolio: "https://alex.dev", role: "Senior Full-stack Engineer", status: "New", appliedAt: "2 hours ago" },
    { id: "2", name: "Sarah Williams", email: "sarah@example.com", phone: "+1 345 678", portfolio: "https://sarah.design", role: "Product Designer", status: "Reviewed", appliedAt: "5 hours ago" },
];

export function getApplications(): Application[] {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
    if (!stored) {
        localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(INITIAL_APPLICATIONS));
        return INITIAL_APPLICATIONS;
    }
    return JSON.parse(stored);
}

export function saveApplication(app: Omit<Application, "id" | "status" | "appliedAt">) {
    if (typeof window === "undefined") return;
    const apps = getApplications();
    const newApp: Application = {
        ...app,
        id: Math.random().toString(36).substr(2, 9),
        status: "New",
        appliedAt: "Just now",
    };
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify([newApp, ...apps]));

    // Increment applicant count for the specific job
    const jobs = getJobs();
    const updatedJobs = jobs.map(j =>
        j.title === app.role ? { ...j, applicants: j.applicants + 1 } : j
    );
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(updatedJobs));
}

export function getJobs(): Job[] {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEYS.JOBS);
    if (!stored) {
        localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(INITIAL_JOBS));
        return INITIAL_JOBS;
    }
    return JSON.parse(stored);
}

export function deleteJob(id: string) {
    if (typeof window === "undefined") return;
    const jobs = getJobs().filter(j => j.id !== id);
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(jobs));
}
