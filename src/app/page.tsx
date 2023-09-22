'use client';

import React, { useCallback, useState } from 'react';
import MovieCardListSection from '@/components/app/MovieCardListSection';


export default function HomePage() {
  return (
    <section className='layout mt-4'>
      <h1 className='mb-4'>Top Rated Movies</h1>

      <div className="divider" />

      <MovieCardListSection />
    </section>
  );
}
