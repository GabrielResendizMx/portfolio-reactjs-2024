'use client'

import {RiLinkedinFill,RiGithubFill, RiInstagramFill} from 'react-icons/ri'
import Link from 'next/link'

// icons
const icons = [
  {
    path: 'https://www.linkedin.com/in/gabriel-res%C3%A9ndiz-mu%C3%B1oz-b73645258/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/GabrielResendizMx',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.instagram.com/gabrielmx76?igsh=N2N0NmRidzJkdGc4&utm_source=qr',
    name: <RiInstagramFill />
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icons, index) => {
        return <Link target='_blank' href={icons.path} key={index}>
          <div className={`${iconsStyles}`}>
            {icons.name}
          </div>
        </Link>
      })}
    </div>
  )
}

export default Socials