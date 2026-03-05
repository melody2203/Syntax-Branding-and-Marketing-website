"use client";

// Simple authentication utility for the admin dashboard
// Using localStorage for session persistence in this demo implementation

const ADMIN_CREDENTIALS = {
    email: "admin@syntax.dev",
    password: "password123", // In a real app, this would be hashed and stored in a DB
};

export const AUTH_KEY = "syntax_admin_auth";

export function login(email: string, pass: string): boolean {
    if (email === ADMIN_CREDENTIALS.email && pass === ADMIN_CREDENTIALS.password) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(AUTH_KEY, "true");
        }
        return true;
    }
    return false;
}

export function logout() {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(AUTH_KEY);
    }
}

export function isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(AUTH_KEY) === "true";
    }
    return false;
}
