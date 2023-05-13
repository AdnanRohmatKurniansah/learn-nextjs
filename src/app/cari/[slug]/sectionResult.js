import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json())

export default function SectionResult({params: query}) {

  const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
  var loading = !data && !error
  

  return (
    <div>
        <p style={{ margin: '10px' }}>Hasil Pencarian: {query}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {loading && "Tunggu Sebentar..."} 
            {data != null && data.items.length > 0 ? 
            data.items.map(e => {
                return <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src={e.avatar_url} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.login}</h5>
                    </a>
                    <Link href={e.repos_url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Repo
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
            })
        : <p>Tidak ada hasil yang ditemukan</p>
        }  
        </div>
    </div>
  )
}
