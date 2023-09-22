'use client';

import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import MovieCard from '@/components/cards/MovieCard';
import APP_IMAGES from '@/constant/images';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <section className='layout mt-4'>
      <h1 className='mb-4'>Top Rated Movies</h1>
      <div className="divider" />
      <section className='flex flex-wrap items-center justify-between gap-x-6 gap-y-8'>
        <MovieCard
          title='Movie Title'
          rating={84}
          releasedDate='23-09-2023'
          movieThumbnail={APP_IMAGES.movieImg}
        />
        <MovieCard
          title='Movie Title'
          rating={84}
          releasedDate='23-09-2023'
          movieThumbnail={APP_IMAGES.movieImg}
        />
        <MovieCard
          title='Movie Title'
          rating={84}
          releasedDate='23-09-2023'
          movieThumbnail={APP_IMAGES.movieImg}
        />
        <MovieCard
          title='Movie Title'
          rating={84}
          releasedDate='23-09-2023'
          movieThumbnail={APP_IMAGES.movieImg}
        /><MovieCard
          title='Movie Title'
          rating={84}
          releasedDate='23-09-2023'
          movieThumbnail={APP_IMAGES.movieImg}
        />
        <MovieCard
          title='Movie Title'
          rating={84}
          releasedDate='23-09-2023'
          movieThumbnail={APP_IMAGES.movieImg}
        /><MovieCard
          title='Movie Title'
          rating={84}
          releasedDate='23-09-2023'
          movieThumbnail={APP_IMAGES.movieImg}
        />
        <MovieCard
          title='Movie Title'
          rating={84}
          releasedDate='23-09-2023'
          movieThumbnail={APP_IMAGES.movieImg}
        />
      </section>
    </section>
  );
}
