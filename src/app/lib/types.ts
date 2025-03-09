export interface EmploiProps {
    id: number; // Auto-incremented ID
    formateur: string; // Name of the formateur (trainer)
    module: string; // Module name
    groupe: string; // Group name
    seance?: string; // Session (optional)
    salle: string; // Room name
    jour: string; // Day of the week
    date: number; // Date (as a number, e.g., timestamp)
    moment: string; // Moment (e.g., morning, afternoon)
    time: string; // Time of the session
    n?: string; // Optional field
    prevus?: string; // Expected attendees (optional)
    presents?: string; // Present attendees (optional)
    emargement?: number; // Signature/attendance percentage (optional)
  }
