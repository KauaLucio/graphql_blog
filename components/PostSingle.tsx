import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCalendar, AiFillTags } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import dayjs from 'dayjs'

const PostSingle = ({ post }: any) => {

  return (
    <div className="w-full rounded-xl shadow-lg bg-white p-5 mb-10 md:mb-5">
      <div className="w-full">
       <Image 
        src={post.thumbnail[0].url}
        alt="Capa Post"
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
            {dayjs(post.createdAt).format('DD/MM/YYYY HH:mm')}
          </p>

          <p className="flex items-center gap-2">
            <AiFillTags />
            {post.category.name}
          </p>

          <p className="flex items-center gap-2">
            <BsPersonFill />
            {post.author.name}
          </p>
        </div>
        <h2 className="inline-block my-4 hover:text-cyan-500 text-neutral-800 font-bold text-4xl">
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p>{post.content.text.slice(0, 194)}</p>
        
      </div>
    </div>
  )
}

export default PostSingle