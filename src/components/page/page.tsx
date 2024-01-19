import { FC, ReactNode } from 'react'
import Navigation from '../navigation'

interface Props {
  children: ReactNode
}

const Page: FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <header className="mt-16 m-8 md:mt-8 flex flex-col gap-4 text-xl mx-auto px-8 md:w-1/2 md:p-0">
        <h1 className="text-3xl text-center font-bold">GraphQL Task List</h1>
        <p>
          Open the menu to filter tasks, or press the buttons below to sort the
          tasks by alphabetical order
        </p>
      </header>
      {children}
    </>
  )
}

export default Page
