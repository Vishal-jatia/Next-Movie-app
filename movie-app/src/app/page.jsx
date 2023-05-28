import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular/?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res.results[0])
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 m-10 text-center  w-[90vw] mx-auto justify-center '>
      {res.results.map(show => {
        return (
          <div style={{"background-image": `url(${show.backdrop_path})`}} className='my-10 flex flex-col shadow-xl shadow-black p-5 gap-10 justify-center rounded-2xl'>
            <h1 className='font-bold text-3xl '>{show.title}</h1>
            <Image width="400" height="500" alt={show.title} src={`https://www.themoviedb.org/t/p/original${show.poster_path}`} className='mx-auto rounded-xl object-cover shadow-xl shadow-black' />
            <p>{show.overview}</p>
          </div>)
      })}
    </div>
  )
}
