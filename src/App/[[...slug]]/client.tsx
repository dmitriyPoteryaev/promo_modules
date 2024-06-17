'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 

const MainPage = dynamic<any>(
  () => import('../../modules/main/Main').then(mod => mod.MainPage), { ssr: false }
)
 
export function ClientMainPage() {
  return <MainPage />
}