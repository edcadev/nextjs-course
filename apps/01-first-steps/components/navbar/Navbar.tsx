import type { FC } from 'react'

import { ActiveLink } from '@/components'

import Link from 'next/link'
import { GoHome } from 'react-icons/go'

const navItems: Array<{ text: string; path: string }> = [
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Contact',
    path: '/contact',
  },
  {
    text: 'Pricing',
    path: '/pricing',
  },
]

export const Navbar: FC = () => {
  return (
    <nav className="m-2 flex justify-between rounded bg-blue-800/30 p-2">
      <Link
        href="/"
        className="flex items-center gap-2"
      >
        <GoHome />
        <span>Home</span>
      </Link>
      <div className="flex">
        {navItems.map((navItem) => (
          <ActiveLink
            key={navItem.path}
            {...navItem}
          />
        ))}
      </div>
    </nav>
  )
}
