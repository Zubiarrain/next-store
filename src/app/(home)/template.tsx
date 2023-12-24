"use client"

import { Description } from "../components/home/Description"
import { Hero } from "../components/home/Hero"
import 'app/sass/globals.sass'


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>

        <Hero />

        <Description/> 

        {children}

      </div>
  )
}
