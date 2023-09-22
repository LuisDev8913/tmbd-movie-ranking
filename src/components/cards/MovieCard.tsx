import LinearProgress from '@/components/LinearProgress'
import NextImage from '@/components/NextImage'
import APP_IMAGES from '@/constant/images'
import clsx from 'clsx'
import React, { useState } from 'react'
import { RiStarFill, RiStarLine } from 'react-icons/ri'

interface MovieCardProps {
  title: string,
  rating: number,
  releasedDate: string,
  movieThumbnail: string
  movieLink?: string
}

const MovieCard = ({ title, rating, releasedDate, movieThumbnail }: MovieCardProps) => {
  const [isStarred, setIsStarred] = useState(() => false)

  return (
    <section className="relative card w-96 bg-base-100 shadow-2xl duration-200 cursor-pointer hover:shadow-black">
      <figure>
        <NextImage
          useSkeleton
          src={movieThumbnail}
          width={400}
          height={300}
          alt="Movie Thumbnail"
          className='w-full duration-300 hover:scale-110'
        />
      </figure>
      <span className='absolute right-4 top-4 z-30 cursor-pointer' onClick={() => setIsStarred(prev => !prev)}>
        {
          isStarred
            ? <RiStarFill className='text-yellow-400 text-2xl' />
            : <RiStarLine className='text-white text-2xl' />
        }
      </span>
      <div className={clsx([
        "card-body rounded-b-2xl",
      ])}>
        <h2 className="card-title">{title}</h2>
        <LinearProgress rating={rating} />
        <p className='text-sm text-[gray]'>Released Date: {releasedDate}</p>
      </div>
    </section>
  )
}

export default MovieCard