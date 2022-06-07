import { GetStaticPaths } from 'next'
import React from 'react'
import PostSingle from '../../components/PostSingle'
import Sidebar from '../../components/Sidebar'
import client from '../../service/apollo-client'
import { getCategories, getPostsByCategory } from '../../service/endpoints'

const Category = ({articles}: any) => {

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 md:p-7 gap-3 md:gap-10">
        <section className="sm:col-span-1 lg:col-span-2 px-3 py-10">
          {
            articles.map((post: any, index: number) => (
              <PostSingle key={index} post={post} />
            ))
          }
        </section>
        <aside className="col-span-1 px-3 py-10">
          <Sidebar />
        </aside>
      </div>
  )
}

export const getStaticProps = async ({ params }: any) => {
  const { data: { articles } } = await client.query({
    variables: {
      slug: params?.slug
    },
    query: getPostsByCategory
  })


  return {
    props: {
      articles
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { categories } } = await client.query({
    query: getCategories
  })

  return {
    paths: categories.map((category: any) => ({ params: { slug: category.slug } })),
    fallback: true
  }

}

export default Category