import clsx from 'clsx'
import React, { useState } from 'react'
import { profile } from '../../../assets/data/profile'
import ProjectDescription from './ProjectDescription'

interface Props {}

const Experience: React.FC<Props> = (props) => {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="experience">
      <div className="flex justify-between">
        <h2 className="text-5xl font-bolder mb-6 headline-text">
          Relevant Experience
        </h2>

        <button
          // className="transition-all font-bold"
          className={clsx(
            // Button itself
            'px-3 py-2 rounded-md text-sm font-medium transition-all',
            'h-1/2 self-center hover:bg-teal-200 transform -translate-y-1',
          )}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show all' : 'Show relevant'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {profile.map((p) => (
          <ProjectDescription project={p} key={p.name} />
        ))}
      </div>
    </section>
  )
}

export default Experience
