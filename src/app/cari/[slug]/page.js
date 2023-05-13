import React from 'react'
 
async function getData(slug) {
  const res = await fetch(`https://api.github.com/users/${slug}`)
  return res.json();
}

export default async function DetailCari({params: {slug}}) {
  
  const data = await getData(slug);
  console.log(data)
  return (
    <div>
      Detail User: {data.name}
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  )
} 
