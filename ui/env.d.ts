/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_COLUMBUS_URL: string;
  readonly VITE_PRIVATE_KEY: string;
  // Add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}