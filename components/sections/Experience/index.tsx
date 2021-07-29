import React from 'react'
import { profile } from '../../../assets/data/profile'
import ProjectDescription from './ProjectDescription'

interface Props {}

const Experience: React.FC<Props> = props => {
  return (
    <section id='experience'>
      <div className='text-5xl font-bold mb-4'> Experience</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3'>
        {profile.map(p => (
          <ProjectDescription project={p} key={p.name} />
        ))}
      </div>
    </section>
  )
}

export default Experience
