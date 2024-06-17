'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 

const Application1Page = dynamic<any>(
  () => import('../Application1Page').then(mod => mod.Application1Page), { ssr: false }
)
 
export function ClientOnly() {
  return <Application1Page />
}