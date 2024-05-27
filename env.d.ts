/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BASE_URL: string;
    // Voeg hier andere omgeving variabelen toe als dat nodig is
    readonly VITE_API_URL?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

