import { ReactNode } from "react";
import { Title } from "./title";

interface ContainerProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function ContainerInfo({
  title,
  description,
  children,
}: ContainerProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <Title title={title} color="primary" />
      {description && (
        <p
          className="w-full block break-words font-semibold outline-none text-sm"
          contentEditable
          suppressContentEditableWarning
          spellCheck="false"
          
        >
          {description}
        </p>
      )}
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
