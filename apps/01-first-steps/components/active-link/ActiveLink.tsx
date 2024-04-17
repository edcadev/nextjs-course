'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import style from './ActiveLink.module.css'

interface Props {
  text: string
  path: string
}

export const ActiveLink = ({ path, text }: Props): JSX.Element => {
  const pathName = usePathname()

  return (
    <Link
      href={path}
      className={`${style.link} ${pathName === path && style['active-link']}`}
    >
      {text}
    </Link>
  )
}
