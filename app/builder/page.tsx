// app/builder/page.tsx
"use client";

import { useState } from "react";
import ChatPanel from "@/components/builder/ChatPanel";
import PreviewPane from "@/components/builder/PreviewPanel";
import CodeEditor from "@/components/builder/CodeEditor";
import { ProjectState } from "@/types/project";

export default function BuilderPage() {
  const [project, setProject] = useState<ProjectState>({
    frontendFiles: {},
    backendFiles: {},
    activeFile: null,
    side: "frontend",
  });

  const [activeView, setActiveView] = useState<"code" | "window" | "preview" | "database">("preview");

  // Sync active file from CodeEditor back to project state
  const handleActiveFileChange = (path: string | null) => {
    setProject((prev) => ({
      ...prev,
      activeFile: path,
    }));
  };

  // Sync file content changes from CodeEditor
  const handleFileChange = (path: string, content: string) => {
    setProject((prev) => ({
      ...prev,
      frontendFiles: {
        ...prev.frontendFiles,
        [path]: content,
      },
    }));
  };

  const frontendFiles = project.frontendFiles || {};
  const hasFiles = Object.keys(frontendFiles).length > 0;

  return (
    <div className="flex flex-col h-screen w-screen bg-black text-white overflow-hidden">
      {/* Top Navigation - Bolt.new style */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-black/80 backdrop-blur-md border-b border-white/10 flex items-center px-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <span className="text-lg font-semibold tracking-tight">AI Builder</span>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center gap-1.5 bg-black/60 rounded-full p-1 border border-white/10 shadow-lg">
            {(["code", "window", "preview", "database"] as const).map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeView === view ? "bg-purple-600/60 text-white shadow-md" : "text-gray-400 hover:bg-white/10"
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>

          {/* Sign In */}
          <button className="px-5 py-1.5 text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 transition-all">
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 pt-14 overflow-hidden">
        {/* Left Sidebar: Agent/Chat */}
        <div className="w-[380px] border-r border-white/10 bg-black/60 backdrop-blur-md overflow-y-auto">
          <ChatPanel project={project} setProject={setProject} />
        </div>

        {/* Main Area - Code / Preview / etc */}
        <div className="flex-1 relative">
          {/* Loading / No Files State */}
          {!hasFiles && activeView !== "code" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-black/80 z-10">
              <div className="text-3xl mb-4">No files yet</div>
              <p className="text-lg">Ask the agent to create something!</p>
            </div>
          )}

          {/* Code Editor View */}
          {activeView === "code" && (
            <CodeEditor
              project={project}
              onFileChange={handleFileChange}
              onActiveFileChange={handleActiveFileChange}
            />
          )}

          {/* Preview View */}
          {activeView === "preview" && (
            <div className="absolute inset-0">
              {hasFiles ? (
                <PreviewPane project={project} />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-500">
                  <div className="text-3xl mb-4">No files yet</div>
                  <p>Ask the agent to create something!</p>
                </div>
              )}
            </div>
          )}

          {/* Window View */}
          {activeView === "window" && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-black/80">
              <div className="text-center">
                <div className="text-3xl mb-4">Window View</div>
                <p>Desktop-like app simulation coming soon</p>
              </div>
            </div>
          )}

          {/* Database View */}
          {activeView === "database" && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-black/80">
              <div className="text-center">
                <div className="text-3xl mb-4">Database</div>
                <p>Database explorer coming soon</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}