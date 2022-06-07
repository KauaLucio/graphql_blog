import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser' 

const Author = ({author}: any) => {
  return (
    <div className="p-10 mb-5 bg-white rounded-xl shadow-lg w-full ">
      <h2 className="text-neutral-700 text-2xl font-bold mb-5">Sobre o autor</h2>
      <div className="flex justify-center md:flex-row flex-col  items-center gap-5">
        <div className="w-40 md:w-80 rounded-full border-4 border-neutral-400">
          <Image 
            src={author.photo.url}
            alt={author.name}
            objectFit="cover"
            height={208}
            width={208}
            layout="responsive"
            style={{borderRadius: "100%"}}
          />
        </div>
        <div>
          <h3 className="text-neutral-800 text-lg font-bold mb-1">{author.name}</h3>
          <p>{parse(author.description)}</p>
        </div>
      </div>
    </div>
  )
}

export default Author