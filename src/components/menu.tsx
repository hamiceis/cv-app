import { Download } from "lucide-react";

interface MenuProps {
  handlePrint: () => void;
}

export function Menu({ handlePrint }: MenuProps) {
  return (
    <div
      className={`z-50 flex flex-col gap-1 p-1 rounded fixed bottom-0 right-0 -translate-x-1/2 -translate-y-1/2 transition-transform`}
    >
      <button
        className="bg-slate-50 flex items-center justify-center w-12 h-12 rounded-full text-2xl border-none cursor-pointer atransition-colors animate-bounce hover:animate-none hover:bg-slate-400 "
        onClick={handlePrint}
      >
        <Download size={24} />
      </button>
    </div>
  );
}
