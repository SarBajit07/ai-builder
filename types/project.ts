export type FileMap = Record<string, string>;

export interface ProjectState {
  frontendFiles: FileMap;
  backendFiles: FileMap;
  activeFile: string | null;
  side: "frontend" | "backend";
}
