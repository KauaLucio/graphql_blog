import React from 'react'
import { useQuery } from '@apollo/client'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'
import PostSingle from '../../components/PostSingle'
import Sidebar from '../../components/Sidebar'
import client from '../../service/apollo-client'
import { getPostBySearch } from '../../service/endpoints'

const FoundPosts = () => {
  const router = useRouter()
  const { loading, error, data } = useQuery(getPostBySearch, {
    variables:{
      str: router.query.query
    },
    client
  })

  if (loading) return <Loader />;
  if (error) return `Error! ${error}`;
  return (
    <div>
      <Head>
        <title>initCodes Blog</title>
      </Head>
      <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-3 md:p-7 gap-10">
        <section className="sm:col-span-1 lg:col-span-2 p-3">
         {
           data.articles.length > 0 
           ? data.articles?.map((article: any) => (
            <PostSingle key={article.id}  post={article} />
           ))
           : (
             <div className="w-full rounded-xl shadow-lg bg-white p-5 mb-5 text-center">
               <h1 className="font-bold text-2xl mb-2 text-slate-500">Desculpe, mas não existe nenhum post com esse título :(</h1>
               <Link href="/"><a className="text-cyan-500 underline">Voltar para Home</a></Link>
             </div>
           )
         }
        </section>
        <aside className="col-span-1 p-3 relative">
          <Sidebar />
        </aside>
      </div>
    </div>
  )
}


export default FoundPosts