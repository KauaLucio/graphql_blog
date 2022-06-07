import { gql } from '@apollo/client'
import type { GetStaticProps, NextPage } from 'next'
import CarouselPosts from '../components/CarouselPosts'
import PostSingle from '../components/PostSingle'
import Sidebar from '../components/Sidebar'
import client from '../service/apollo-client'
import { getPosts } from '../service/endpoints'

const Home: NextPage = ({ articles }: any) => {
  return ( 
    <>
      <CarouselPosts articles={articles} />
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
    </>
   )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: getPosts,
  })  

  return {
    props: {
      articles: data.articles || []
    }
  }
}

export default Home
