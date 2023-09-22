'use client'

import clsx from 'clsx'
import React, { useCallback, useState } from 'react'

enum PAGE {
  PREV = 'previous',
  NEXT = 'next',
}

const pages = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

const Pagination = () => {
  const [selectedPage, setSelectedPage] = useState<number>(() => 1)

  const handlePageChange = useCallback((value: PAGE) => {
    if (selectedPage === 1 && value === PAGE.PREV) return
    if (selectedPage === pages.length && value === PAGE.NEXT) return
    switch (value) {
      case PAGE.PREV:
        setSelectedPage(prev => prev - 1)
        break
      case PAGE.NEXT:
        setSelectedPage(prev => prev + 1)
        break
    }
  }, [setSelectedPage, selectedPage, pages.length])

  return (
    <div className="join">
      <button className="join-item btn" onClick={() => handlePageChange(PAGE.PREV)}>«</button>
      {
        pages.map(page => (
          <button
            key={page.id}
            className={clsx([
              'join-item btn btn-md',
              selectedPage === page.id && 'btn-active'
            ])}
            onClick={() => setSelectedPage(page.id)}
          >{page.id}</button>
        ))
      }
      <button className="join-item btn" onClick={() => handlePageChange(PAGE.NEXT)}>»</button>
    </div>
  )
}

export default Pagination