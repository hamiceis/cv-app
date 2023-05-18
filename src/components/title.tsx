
type TitleProps = {
  title: string,
  color?: string,
}

export function Title({ title, color }: TitleProps) {
  return (
    <p
      className={`outline-none text-lg break-keep w-full  ${color ? `text-blue-500 font-bold uppercase` : 'text-sm font-semibold capitalize leading-5'}`}
      contentEditable
      suppressContentEditableWarning
      spellCheck="false"
    >
      {title}
    </p>
  );
}
