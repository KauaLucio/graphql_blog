import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="py-5 bg-slate-700">
      <div className="container mx-auto px-7 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-white text-3xl">
            <Link href="/">
            initCodes
            </Link>
          </h1>
        </div>

        <nav>

        </nav>
      </div>
    </div>
  )
}

export default Header