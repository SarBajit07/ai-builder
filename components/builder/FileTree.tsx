"use client";

import { ProjectState } from "@/types/project";

interface FileTreeProps {
  project: ProjectState;
  activeFile: string | null;
  onFileSelect: (path: string) => void;
}

export default function FileTree({ project, activeFile, onFileSelect }: FileTreeProps) {
  const frontendFiles = project.frontendFiles || {};

  // Sort files: app/ first, then components/, then others
  const sortedFiles = Object.keys(frontendFiles).sort((a, b) => {
    if (a.startsWith("app/")) return -1;
    if (b.startsWith("app/")) return 1;
    if (a.startsWith("components/")) return -1;
    if (b.startsWith("components/")) return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="h-full bg-[#1e1e1e] text-gray-300 overflow-y-auto border-r border-[#3c3c3c]">
      {/* Header */}
      <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-[#3c3c3c]">
        Files
      </div>

      {/* File List */}
      <ul className="py-2">
        {sortedFiles.length === 0 ? (
          <li className="px-4 py-3 text-gray-500 text-sm">No files yet</li>
        ) : (
          sortedFiles.map((path) => (
            <li key={path}>
              <button
                onClick={() => onFileSelect(path)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2 ${
                  activeFile === path
                    ? "bg-[#2d2d2d] text-white border-l-2 border-blue-500"
                    : "hover:bg-[#2d2d2d] hover:text-gray-100"
                }`}
              >
                <span className="text-blue-400">📄</span>
                <span className="truncate">{path}</span>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}