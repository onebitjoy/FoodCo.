import React from 'react'
import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className='min-h-screen bg-white'>
      <div className='flex flex-col min-h-screen mx-auto max-w-screen-2xl'>
        <Header />
        <div className='flex-1 w-full px-2 '>{children}</div>
      </div>
    </div>
  )
}

export default Layout
