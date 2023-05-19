"use client"

import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import { Menu } from '../components/menu'
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
      <Menu  handlePrint={handlePrint} />
      <main className="p-16 md:p-16 lg:p-24 mx-auto xl:w-[70rem] lg:w-[50rem] md:w-[40rem] sm:w-[34rem] w-full h-full bg-white shadow-2xl" ref={componentRef}>
        <Header />
        <div className="flex xs:flex-col xs:items-start  md:flex-row md:items-start justify-center flex-1 md:gap-20 mt-10" >
          <AsideInfo />
          <Work />
        </div>
      </main>
    </div>
  );
}
