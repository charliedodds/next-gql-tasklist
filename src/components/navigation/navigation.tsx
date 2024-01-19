import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Routes } from '@/routes'

const Navigation = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false)

  const show = () => {
    setIsShowing(true)
  }

  const hide = () => {
    setIsShowing(false)
  }

  return (
    <>
      <button
        onClick={show}
        className="fixed top-4 right-4 font-bold rounded-md md:hidden"
      >
        MENU
      </button>
      <nav
        className={clsx(
          'fixed bg-white w-80 h-full top-0 right-0 duration-300 p-8 flex flex-col gap-8 text-xl',
          isShowing ? 'translate-x-0' : 'translate-x-full',
          'md:sticky md:translate-x-0 md:w-full md:flex-row md:justify-end md:px-8 md:py-4'
        )}
      >
        <button
          onClick={hide}
          className="absolute top-4 right-4 rounded-md md:hidden"
        >
          X
        </button>
        {
          <>
            <Link onClick={hide} href={Routes.Home}>
              All tasks
            </Link>
            <Link onClick={hide} href={Routes.New}>
              New tasks
            </Link>
            <Link onClick={hide} href={Routes.Completed}>
              Completed tasks
            </Link>
            <Link onClick={hide} href={Routes.Accepted}>
              Accepted tasks
            </Link>
          </>
        }
      </nav>
    </>
  )
}

export default Navigation
