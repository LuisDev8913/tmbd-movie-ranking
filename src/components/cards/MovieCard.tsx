import NextImage from '@/components/NextImage'
import APP_IMAGES from '@/constant/images'
import React from 'react'

interface MovieCardProps {
  title: String,
  rating: Number,
  releasedDate: String,
  movieThumbnail: String
}

const MovieCard = ({ title, rating, releasedDate, movieThumbnail }: MovieCardProps) => {
  return (
    <section className="relative card w-96 bg-base-100 shadow-xl">
      <figure>
        <NextImage
          useSkeleton
          src={APP_IMAGES.movieImg}
          width={400}
          height={300}
          alt="Movie Thumbnail"
          className='w-full'
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Movie Title
        </h2>
        <div className='flex gap-x-3 items-center'>
          <progress className="progress progress-primary w-56" value="70" max="100"></progress>
          <span className='text-xs'>84%</span>
        </div>
        <div>
          <p className='text-sm text-[gray]'>Released Date: 23-09-2023</p>
        </div>
      </div>
    </section>
  )
}

export default MovieCard