import { FC } from 'react'

interface Props {
  onAscClick: () => void
  onDescClick: () => void
}

const SortButtons: FC<Props> = ({ onAscClick, onDescClick }) => {
  return (
    <section className="flex justify-center gap-4 m-4 text-white">
      <button
        className="py-2 px-4 rounded-md bg-red-600 shadow-red-800 shadow-btn-lg hover:translate-y-0.5 hover:shadow-red-800 hover:shadow-btn-md active:translate-y-1 active:shadow-btn-sm active:shadow-red-800 duration-100"
        onClick={onAscClick}
        name="Sort ascending A to Z"
      >
        Sort A -&gt; Z
      </button>
      <button
        className="py-2 px-4 rounded-md bg-red-600 shadow-red-800 shadow-btn-lg hover:translate-y-0.5 hover:shadow-red-800 hover:shadow-btn-md active:translate-y-1 active:shadow-btn-sm active:shadow-red-800 duration-100"
        onClick={onDescClick}
        name="Sort descending Z to A"
      >
        Sort Z -&gt; A
      </button>
    </section>
  )
}

export default SortButtons
