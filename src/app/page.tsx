"use client"

import { ReactComponentElement, ReactInstance, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import { AsideInfo } from "@/components/aside-info";
import Header from "@/components/header";
import { Work } from "@/components/work";

export default function Home() {

  const componentRef = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({
    documentTitle: 'my-new-cv',
    content: () => componentRef.current,
  })


  return (
    <div className="mt-12">
      <main className="p-10 mx-auto max-w-[70rem] w-full h-full bg-white shadow-2xl" ref={componentRef}>
        <Header handle={handlePrint}/>
        <div className="flex flex-1 gap-6 mt-10" >
          <AsideInfo />
          <Work />
        </div>
      </main>
    </div>
  );
}
