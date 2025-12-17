"use client";

import TopBar from "./TopBar";
import ChatPanel from "./ChatPanel";
import PreviewPanel from "./PreviewPanel";
import PromptBox from "./PromptBox";

export default function BuilderLayout() {
  return (
    <div className="h-screen w-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <ChatPanel />
        <PreviewPanel />
      </div>

      <PromptBox />
    </div>
  );
}
