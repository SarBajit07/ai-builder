export default function TopBar() {
  return (
    <div className="h-12 flex items-center justify-between px-4 border-b border-zinc-800 bg-zinc-900">
      <div className="font-semibold text-sm">⚡ AI Builder</div>

      <div className="flex gap-2">
        <button className="px-3 py-1 text-xs rounded bg-zinc-800 hover:bg-zinc-700">
          Preview
        </button>
        <button className="px-3 py-1 text-xs rounded bg-zinc-800 hover:bg-zinc-700">
          Publish
        </button>
      </div>
    </div>
  );
}
