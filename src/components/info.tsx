import { ReactElement } from "react";

interface InfoProps {
  icon?: ReactElement;
  description: string;
}

export function Info(props: InfoProps) {
  return (
    <div className="flex items-center gap-2">
      {props?.icon}
      <p
        className="flex-1 text-sm break-words outline-none"
        contentEditable
        suppressContentEditableWarning
        spellCheck="false"
      >
        {props.description}
      </p>
    </div>
  );
}
