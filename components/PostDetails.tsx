import Image from 'next/image'
import React from 'react'
import { AiFillCalendar, AiFillTags } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import parse from 'html-react-parser'
import dayjs from 'dayjs'

const PostDetails = ({article}: any) => {
  let paragraphs = article.content.text.split('\\n')
  let text = paragraphs.join('<br>')
  console.log(text)
  return (
    <div className="w-full rounded-xl shadow-lg bg-white p-5 mb-5">
    <div className="w-full">
     <Image 
      src={article.thumbnail[0].url}
      alt={article.title}
      width={800}
      height={500}
      objectFit="cover"
      objectPosition="center"
      style={{borderRadius: '12px' }}
    />
    </div>
    <div className="p-2">
      <div className="flex items-center flex-wrap gap-5 font-medium text-slate-500">
        <p className="flex items-center gap-2">
          <AiFillCalendar />
          {dayjs(article.createdAt).format('DD/MM/YYYY HH:mm')}
        </p>

        <p className="flex items-center gap-2">
          <AiFillTags />
          {article.category.name}
        </p>

        <p className="flex items-center gap-2">
          <BsPersonFill />
          {article.author.name}
        </p>
      </div>
      <h2 className="inline-block my-4 text-neutral-800 font-bold text-4xl">
        {article.title}
      </h2>
      {
         
        parse(text, { 
          trim: true,
          
        })
      }
        
    </div>
  </div>
  )
}

export default PostDetails