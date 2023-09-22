'use client'

import MovieCard from '@/components/cards/MovieCard'
import Select from '@/components/inputs/Select'
import Pagination from '@/components/pagination/Pagination'
import APP_IMAGES from '@/constant/images'
import React, { useCallback, useState } from 'react'

enum SortBy {
  ASC = 'Ascending',
  DSC = 'Descending',
}

export type Sort = {
  id: number;
  value: SortBy;
}

const sortOptions = [
  { id: 11, value: SortBy.ASC },
  { id: 22, value: SortBy.DSC },
]

const movieList = [
  {
    id: 1,
    title: 'Movie Title',
    rating: 84,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  }, {
    id: 2,
    title: 'Movie Title',
    rating: 21,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  },
  {
    id: 3,
    title: 'Movie Title',
    rating: 84,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  }, {
    id: 4,
    title: 'Movie Title',
    rating: 21,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  },
  {
    id: 5,
    title: 'Movie Title',
    rating: 84,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  }, {
    id: 6,
    title: 'Movie Title',
    rating: 21,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  },
  {
    id: 7,
    title: 'Movie Title',
    rating: 84,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  }, {
    id: 8,
    title: 'Movie Title',
    rating: 21,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  },
  {
    id: 9,
    title: 'Movie Title',
    rating: 84,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  }, {
    id: 10,
    title: 'Movie Title',
    rating: 21,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  }, {
    id: 11,
    title: 'Movie Title',
    rating: 84,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  }, {
    id: 12,
    title: 'Movie Title',
    rating: 21,
    releasedDate: '23-09-2023',
    movieThumbnail: APP_IMAGES.movieImg,
  },
]


const MovieCardListSection = () => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.ASC)

  const handleSort = useCallback((value: SortBy) => {
    setSortBy(value)
  }, [setSortBy])

  return (
    <section className='flex flex-wrap items-center justify-evenly gap-x-6 gap-y-12'>
      <div className='w-full flex justify-end items-center'>
        <Select
          label='Sort By'
          labelId='sort-by'
          value={sortBy}
          onChangeValue={handleSort}
          options={sortOptions}
        />
      </div>

      {
        movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            releasedDate={movie.releasedDate}
            movieThumbnail={movie.movieThumbnail}
          />
        ))
      }

      <section className='w-full flex justify-center items-center my-12'>
        <Pagination />
      </section>

    </section>
  )
}

export default MovieCardListSection