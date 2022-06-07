import { useMutation } from '@apollo/client'
import React, { FormEvent, useState } from 'react'
import client from '../service/apollo-client'
import { addComments } from '../service/endpoints'

type CommentsFormProps = {
  postSlug: string
}


const CommentsForm = ({postSlug}: CommentsFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [commentAdded, setCommentAdded] = useState(false)
  const [addComment, { data, loading, error }] = useMutation(addComments, {
    variables: {
      name,
      email,
      comment,
      slug: postSlug
    },
    client
  })
  const handleAddComment = async (e: FormEvent) => {
    e.preventDefault()

    addComment()
    if(!error) setCommentAdded(true)
    setName('')
    setComment('')
    setEmail('')
  }
  
  return (
    <div className="p-10 mb-5 bg-white rounded-xl shadow-lg w-full ">
      <h2 className="text-neutral-700 text-2xl font-bold mb-5">Deixe seu comentário</h2>
      <form onSubmit={handleAddComment} className="grid grid-cols-2 grid-flow-row gap-x-5">
        <div className="md:col-span-1 col-span-2 mb-5">
          <label htmlFor="name" className="text-cyan-500 text-lg font-medium">Nome:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" id="name" className="w-full h-10 px-2 border border-neutral-400" />
        </div>

        <div className="md:col-span-1 col-span-2">
          <label htmlFor="email" className="text-cyan-500 text-lg font-medium">Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" className="w-full h-10 px-2 border border-neutral-400" />
        </div>

        <div className="col-span-2">
          <label htmlFor="comment" className="text-cyan-500 text-lg font-medium">Seu Comentário:</label>
          <textarea name="comment" value={comment} onChange={e => setComment(e.target.value)} id="comment" className="w-full h-32 p-2 border border-neutral-400"></textarea>
        </div>
        <div className="col-span-2 mt-3">
          <button 
            type="submit" 
            className="px-7 py-2 bg-cyan-400 text-white font-md hover:bg-cyan-500 text-whit rounded-md">Postar</button>
        </div>
      </form>
      {
        commentAdded && (<p className="text-sm text-neutral-500">Seu comentário foi enviado enviado para ser analisado! Obrigado pelo seu feedback</p>)
      }
    </div>
  )
}

export default CommentsForm