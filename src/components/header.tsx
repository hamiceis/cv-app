"use client"
import { memo, useState, useEffect, ChangeEvent } from 'react';
import { Title } from './title';
import { UserCircle2 } from 'lucide-react';
import { Menu } from './menu';

interface FileChangeEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    files: FileList;
  };
}

function Header() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [preview, setPreview] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    const imgPreview = preview ? `url('${preview}')` : '';
    const headerElement = document.getElementById('img');
    if (headerElement) {
      headerElement.style.backgroundImage = imgPreview ;
    }
  }, [preview]);

  const onSelectFile = (e: FileChangeEvent) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const opacityImage = !preview ? 'opacity-1' : 'opacity-0';

  return (
    <header id="header" className="flex sm:flex-col xs:flex-col lg:flex-row items-center font-bold gap-6 md:gap-10">
      <div className="flex flex-shrink-0 flex-grow-0 flex-auto w-60 h-60 rounded-full relative overflow-hidden cursor-pointer border border-black group">
        <input
          className="opacity-0 w-0 h-0 pointer-events-none"
          accept="image/*"
          type="file"
          name="userImage"
          id="userImage"
          onChange={onSelectFile}
          value=""
        />
        <label htmlFor="userImage">
          <div id='img' className="h-full w-full absolute top-0 left-0 bg-center bg-no-repeat bg-cover transition-colors" />
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center cursor-pointer ${opacityImage}`}>
            <UserCircle2 size={40} className="mb-2 group-hover:text-zinc-400 group-hover:transition-colors" />
            <p className="group-hover:text-zinc-400 text-xs group-hover:transition-colors">
              SELECT YOUR PICTURE
            </p>
          </div>
        </label>
      </div>

      <div className="flex-1 ml-4">
        <p
          className="outline-none inline-block w-full leading-none text-4xl break-keep object-cover caret-red-600 text-black"
          contentEditable
          suppressContentEditableWarning
          spellCheck="false"
        >
          Nome Completo
        </p>
        <Title title="Front-end Developer" color="primary" />
      </div>
    </header>
  );
}

export default memo(Header);
