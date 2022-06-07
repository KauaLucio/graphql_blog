import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Author from '../../components/Author'
import Comments from '../../components/Comments'
import CommentsForm from '../../components/CommentsForm'
import PostDetails from '../../components/PostDetails'
import Sidebar from '../../components/Sidebar'
import client from '../../service/apollo-client'
import { getPosts, getSinglePost } from '../../service/endpoints'

const Post = ({ article }: any) => {
  console.log(article)
  return (
    <div>
      <Head>
        <title>initCodes Blog - {article.title}</title>
      </Head>
      <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-3 md:p-7 gap-10">
        <section className="sm:col-span-1 lg:col-span-2 p-3">
          <PostDetails article={article} />
          <Author author={article.author} />
          <CommentsForm postSlug={article.slug} />
          <Comments comments={article.comments}/>
        </section>
        <aside className="col-span-1 p-3 relative">
          <Sidebar />
        </aside>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: { article } } = await client.query({
    variables: {
      slug: params?.slug
    },
    query: getSinglePost
  })


  return {
    props: {
      article
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { articles } } = await client.query({
    query: getPosts
  })

  
  return {
    paths: articles.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: true
  }
}

export default Post