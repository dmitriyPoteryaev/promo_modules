'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 

const App = dynamic<any>(
  () => import('..').then(mod => mod.App), { ssr: false }
)
 
export function ClientOnly() {
  return <App />
}