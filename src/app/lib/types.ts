export interface EmploiProps {
    id: number; // Auto-incremented ID
    formateur: string; // Name of the formateur (trainer)
    module: string; // Module name
    groupe: string; // Group name
    seance: string | null ; // Session (optional)
    salle: string; // Room name
    jour: string; // Day of the week
    date: number; // Date (as a number, e.g., timestamp)
    moment: string; // Moment (e.g., morning, afternoon)
    time: string; // Time of the session
    n?: string | null; // Optional field
    prevus?: string | null; // Expected attendees (optional)
    presents?: string | null; // Present attendees (optional)
    emargement?: number | null // Signature/attendance percentage (optional)
  }
export type SheetRow = {
    [key: string]: unknown; // Dynamic keys like __EMPTY, __EMPTY_1, etc.
    __EMPTY: string; // Formateur
    __EMPTY_1: string; // Module
    __EMPTY_2?: string; // Seance
    __EMPTY_3: string; // Groupe
    __EMPTY_4: string; // Salle
    __EMPTY_5: string; // Jour
    __EMPTY_6: string; // Moment
    __EMPTY_7: string; // Time
    __EMPTY_8:  number; // Date
    __EMPTY_9?: string; // n
    __EMPTY_10?: string; // Prevus
    __EMPTY_11?: string; // Presents
    __EMPTY_12?: number; // Emargement
  };
