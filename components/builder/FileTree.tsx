"use client";

import { ProjectState } from "@/types/project";

export default function FileTree({
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

  return (
    <div className="w-56 border-r border-zinc-800 p-3 text-sm">
      <div className="flex gap-2 mb-2">
        {["frontend", "backend"].map((side) => (
          <button
            key={side}
            onClick={() => setProject({ ...project, side })}
            className={`px-2 py-1 rounded ${
              project.side === side
                ? "bg-zinc-700"
                : "bg-zinc-900"
            }`}
          >
            {side}
          </button>
        ))}
      </div>

      {Object.keys(files).map((file) => (
        <div
          key={file}
          onClick={() =>
            setProject({ ...project, activeFile: file })
          }
          className={`cursor-pointer px-2 py-1 rounded ${
            project.activeFile === file
              ? "bg-zinc-700"
              : "hover:bg-zinc-800"
          }`}
        >
          {file}
        </div>
      ))}
    </div>
  );
}
