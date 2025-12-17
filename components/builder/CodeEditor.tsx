"use client";

import { ProjectState } from "@/types/project";

export default function CodeEditor({
  project,
  setProject,
}: {
  project: ProjectState;
  setProject: Function;
}) {
  const files =
    project.side === "frontend"
      ? project.frontendFiles
      : project.backendFiles;

  const content = project.activeFile
    ? files[project.activeFile]
    : "";

  function updateCode(value: string) {
    if (!project.activeFile) return;

    const updated = {
      ...files,
      [project.activeFile]: value,
    };

    setProject({
      ...project,
      [project.side === "frontend"
        ? "frontendFiles"
        : "backendFiles"]: updated,
    });
  }

  return (
    <textarea
      value={content}
      onChange={(e) => updateCode(e.target.value)}
      className="flex-1 bg-zinc-900 p-3 font-mono text-sm outline-none"
    />
  );
}
