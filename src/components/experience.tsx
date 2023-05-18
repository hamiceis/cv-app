import { PlusCircle, XCircle } from "lucide-react";
import { Title } from "../components/title";
import { ReactElement } from "react";

interface ExperienceProps {
  title: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
  children?: ReactElement<HTMLAllCollection>;
}

export function Experience(props: ExperienceProps) {
  return (
    <div className="flex flex-col mx-2 group">
      <div className="flex items-center gap-2">
        <Title title={props.title} color="primary" />
        <button className="invisible group-hover:visible" onClick={props.onIncrement}>
          <PlusCircle color="green" />
        </button>
        <button className="invisible group-hover:visible" onClick={props.onDecrement}>
          <XCircle color="red" />
        </button>
      </div>
      {props.children}
    </div>
  );
}
