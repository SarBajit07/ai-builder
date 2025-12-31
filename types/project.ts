// types/project.ts
/**
 * Simple string key → file content mapping
 * (file path as key, raw file content as value)
 */
export type FileMap = Record<string, string>;

/**
 * Core state shape for the builder/project editor
 */
export interface ProjectState {
  /** Frontend files (Next.js pages, components, styles, etc.) */
  frontendFiles: FileMap;

  /** Backend files (API routes, server components, utils, etc.) */
  backendFiles: FileMap;

  /**
   * Currently selected/opened file path
   * null when no file is active
   */
  activeFile: string | null;

  /**
   * Which tab/side is currently active in the editor
   * Helps with UI state (file tree, editor focus, etc.)
   */
  side: "frontend" | "backend";

  // Optional: add more fields as your project grows
  // lastSavedAt?: string;           // ISO timestamp
  // modifiedFiles?: Set<string>;     // for dirty state tracking
  // currentTheme?: "light" | "dark"; // if you have theme switching
}

/**
 * Utility type for when you need a read-only version
 */
export type ReadOnlyProject = Readonly<ProjectState>;

/**
 * Initial/empty project state (useful for useState default)
 */
export const INITIAL_PROJECT_STATE: ProjectState = {
  frontendFiles: {},
  backendFiles: {},
  activeFile: null,
  side: "frontend",
} as const;