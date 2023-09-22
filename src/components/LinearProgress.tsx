import React from 'react'

interface LinearProgressProps {
  rating: number
}

const LinearProgress = ({ rating }: LinearProgressProps) => {
  return (
    <div className='flex gap-x-3 items-center'>
      <progress className="progress progress-primary w-56" value={rating} max="100"></progress>
      <span className='text-xs'>{rating}%</span>
    </div>
  )
}

export default LinearProgress