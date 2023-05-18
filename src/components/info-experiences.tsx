interface InfoExperienceProps {
  date: string;
  content: string;
}

export function InfoExperience(props: InfoExperienceProps) {
  return (
    <div className="my-4 gap-1 flex flex-col">
      <strong
        className="font-semibold text-lg leading-5"
        contentEditable
        suppressContentEditableWarning
        spellCheck="false"
      >
        {props.date}
      </strong>
      <p className="break-words outline-none text-sm" contentEditable spellCheck="false" suppressContentEditableWarning>
        {props.content}
      </p>
    </div>
  );
}
