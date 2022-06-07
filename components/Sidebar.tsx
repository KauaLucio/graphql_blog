import { gql } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, useEffect, useState } from 'react'
import { BiSearchAlt, BiChevronRight } from 'react-icons/bi'
import client from '../service/apollo-client'

const Sidebar = () => {
  const [categories, setCategories] = useState<any>([])
  const [searchTerm, setSearchTerm] = useState('')
  
  const router = useRouter()
  useEffect(() => {
    getCategories()

    async function getCategories() {
      const {data} = await client.query({
        query: gql`
          query getCategories {
            categories {
              id
              name
              slug
              articles {
                id
                slug
              }
            }
          }
        `
      })

      setCategories(data.categories)
    }

  }, [])
  const handleSearchPosts = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/search/${searchTerm}`)
  }

  return (
    <div className="w-full rounded-xl shadow-lg bg-white sticky top-4 p-5 mb-10">
      <div className="mb-10">
        <h3 className="text-xl font-bold text-cyan-500 mb-4 uppercase">Buscar no Blog</h3>
        <form onSubmit={handleSearchPosts} className="flex w-full">
          <input 
            className=" h-10 border w-4/5 px-2 outline-none"
            type="text"
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button type="submit" className="w-1/5 h-10 text-white bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center">
            <BiSearchAlt fontSize={25} />
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-bold text-cyan-500 mb-4 uppercase">Categorias</h3>
        <ul>
          {
            categories?.map((category: any) => (
              <li key={category.id} className="flex items-center gap-1 hover:text-cyan-600 font-medium border-b py-3">
                <BiChevronRight fontSize={26}/>
                <Link href={`/category/${category.slug}`}>
                  {`${category.name} (${category.articles.length})`} 
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar