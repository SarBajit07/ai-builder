"use client";

import { ProjectState } from "@/types/project";

export default function PreviewPanel({ project }: { project?: ProjectState }) {
  const html =
    project?.frontendFiles["preview.html"] ??
    "<h3 style='color:gray'>No preview yet</h3>";

  return (
    <div className="w-1/3 border-l border-zinc-800 bg-white">
      <iframe
        className="w-full h-full"
        sandbox="allow-scripts"
        srcDoc={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: system-ui;
        padding: 16px;
      }
    </style>
  </head>
  <body>
    ${html}
  </body>
</html>`}
      />
    </div>
  );
}
