import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Subtasks = {
  title: string,
  isCompleted: boolean,
} 

type Tasks = {
  title: string,
  description: string,
  subtasks: Subtasks[],
  status: string,
}

type Column = {
  name: string,
  tasks: Tasks[],
}

type Boards = {
  name: string,
  columns: Column[],
}

function App() {
  const [boards, setBoards] = useState<Boards[]>();
  const [createBoards, setCreateBoards] = useState(false);

  function handleCreateNewBoard (e : React.MouseEvent) {
    setCreateBoards(true)
  }
  
  return (
    <div className="flex justify-between h-screen w-full background">
      <div className='flex flex-col justify-between w-80 sm:w-80 border-r-2 border-gray-600 border-opacity-40'>
        <div className='flex flex-col'>
          <div className='flex flex-col mb-6 justify-between h-20 px-12'>
            <h1 className='pt-6 text-4xl text-white'>Kanban</h1>
          </div>
          <div className='flex flex-col items-start pr-6'>
            {/* {boards.map((a) => {
              <div>{a}</div>
            })} */}
            <div className='py-3 px-6 sm:px-12 spacing'>ALL BOARDS (8)</div>
            <button className='py-3 pl-6 sm:pl-12 text-left w-full rounded-r-full boards'>Platform Launch</button>
            <button className='py-3 pl-6 sm:pl-12 buttons'>Marketing Plan</button>
            <button className='py-3 pl-6 sm:pl-12 buttons'>Roadmap</button>
            <button onClick={handleCreateNewBoard} className='py-3 pl-6 sm:pl-12'>+ Create New Board</button>
          </div>
        </div>
        <div className='flex flex-col justify-between h-30'>
          <div className='h-12 toggle text-center mx-6 rounded-md py-3'>Toggle Dark Mode</div>
          <button className='h-20 text text-center py-4'>Hide Sidebar</button>
        </div>
      </div>
      <div className="card">
        xxxxxxxxxxxxxxxxxxxxxxx
      </div>
    </div>
  )
}

export default App
