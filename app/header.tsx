'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div style={{ borderRadius: "50%", overflow: "hidden", width: "250 + 10vw"}}>
          <Image src="/profile.jpg" alt="Profile Photo" width={250} height={250}/>
        </div>
        <div style={{ height: "30px" }} /> {/* 30px empty space added */}
        <Link href="/" className="font-bold text-black dark:text-white">
          서준
        </Link>{" "} · {" "}
        <TextLoop className="font-medium text-zinc-600 dark:text-zinc-300">
          <span>Min Jun "Mark" Sung</span>
          <span>성민준</span>
          <span>sjun___</span>
          <span>themrsung</span>
        </TextLoop>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          CEO & Founder @ Mirae Research
        </TextEffect>
      </div>
    </header>
  )
}
