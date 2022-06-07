import Link from 'next/link'
import React from 'react'

const CarouselItem = ({article}: any) => {
  return (
    <div className="relative z-10 w-full h-[500px] text-white ">
      <div 
        className="z-10 absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-full"
        style={{backgroundImage: `url("${article.thumbnail[0].url}")`}}  
      />
      <div className="absolute z-20 rounded-lg bg-center opacity-30 bg-[#1F2022] w-full h-full" />
      <div className="relative z-30 h-full p-10 flex flex-col justify-center">
        <span className="inline-block text-md font-medium mb-1">{article.category.name}</span>
        <h2 className="text-3xl font-bold mb-3">{article.title}</h2>
        <p>{article.content.text.slice(0, 50)}</p>
        <div className="mt-2">
          <Link href={`/post/${article.slug}`}>
            <a className="inline-block py-2 px-5 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium">
              Ler mais
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem