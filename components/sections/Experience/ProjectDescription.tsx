import React from 'react'
import { Project, skillMap } from '../../../assets/data/profile'
import Pill from './Pill'

interface Props {
  project: Project
}

const ProjectDescription: React.FC<Props> = props => {
  const { project } = props
  const filteredSkills = project.skills.slice(0, 4)

  return (
    <div className=' bg-white space-y-3 px-6 pt-4 pb-6 rounded-3xl shadow-lg border flex flex-col'>
      {project.image && (
        <img
          src='https://tailwindui.com/img/components/home-screens.02-card-layout-with-sidebar-xl.png'
          className='w-full h-32 object-cover rounded-xl hover:filter hover:brightness-75 transition'
        />
      )}
      <div className='flex justify-between items-center'>
        <div>
          <h2
            className='font-semibold leading-snug tracking-wide text-3xl mb-1'
            title={`${project.yearStart} - ${project.yearEnd || 'Current'}`}
          >
            {project.name}
          </h2>
          <h3 className='text-gray-500 font-extralight'>{project.title}</h3>
        </div>
        <div className='font-extrabold'>...</div>
      </div>

      {/* List of skills */}
      <ul className='flex flex-wrap'>
        {filteredSkills.map(skill => (
          <Pill
            className='mr-1 mb-1 cursor-pointer'
            key={skill}
            color={skillMap[skill]?.preferredColor}
          >
            {skill}
          </Pill>
        ))}
      </ul>

      {/* Bullet points of highlights */}
      <div className='prose prose-sm sm:prose text-gray-600 font-light'>
        <ul>
          {/* Only show 3 highlights in the cards */}
          {project.highlights.slice(0, 2).map((highlight, index) => (
            <li key={index}>{highlight.description}</li>
          ))}
        </ul>

        {/* TODO: - Alternative summary handwritten with short description? */}
        {/* {project.summary} */}
      </div>

      {/* Link to go see the project, if live */}
      {false && project.summary && (
        <a
          className='text-center bg-gray-800 text-white py-1 rounded-2xl'
          href={project.summary}
        >
          MARK DONE
        </a>
      )}
    </div>
  )
}

export default ProjectDescription
