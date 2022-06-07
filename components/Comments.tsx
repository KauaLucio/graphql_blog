import React from 'react'

const Comments = ({comments}: any) => {
  return (
    <div className="p-10 mb-5 bg-white rounded-xl shadow-lg w-full ">
      <h2 className="text-neutral-700 text-2xl font-bold mb-5">Comentários</h2>
      {
        comments?.map((comment: any) => (
          <div key={comment.id} className="border-b border-neutral-300 px-2 py-3">
            <h4 className="font-bold text-xl text-cyan-500 mb-1">{comment.name}</h4>
            <span className="text-md font-medium text-neutral-700">{comment.email}</span>
            <p className="text-md text-neutral-800 mt-1">{comment.comment}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Comments