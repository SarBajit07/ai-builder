"use client";

import { useState } from "react";

export default function PromptBox() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="border-t border-zinc-800 bg-zinc-900 p-3">
      <div className="flex items-center gap-2">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="How can I help you today?"
          className="flex-1 bg-zinc-800 text-sm px-4 py-2 rounded outline-none"
        />
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm">
          Send
        </button>
      </div>
    </div>
  );
}
