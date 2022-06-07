import Head from 'next/head'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  //bg-slate-200
  return (
    <div>
      <Head>
        <title>initCodes Blog</title>
      </Head>
      <Header />
      <main className=" bg-slate-500"> 
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout