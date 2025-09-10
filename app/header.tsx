'use client'
import { TextEffect } from '@/components/ui/text-effect'
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
          성민준
        </Link>
        <TextEffect className="font-medium text-black dark:text-white">
          Min Jun "Mark" Sung - 서준
        </TextEffect>
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
