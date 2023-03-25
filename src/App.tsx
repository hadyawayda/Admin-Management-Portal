import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [boards, setBoards] = useState([]);
  const [createBoards, setCreateBoards] = useState(false);

  function handleCreateNewBoard (e : React.MouseEvent) {
    setCreateBoards(true)
  }
  
  return (
    <div className="flex justify-between h-screen w-full background">
      <div className='flex flex-col justify-between w-80 border-r-2 border-gray-600 border-opacity-40'>
        <div className='flex flex-col'>
          <div className='flex flex-col mb-10 justify-between h-20 px-12'>
            <h1 className='pt-6 text-4xl text-white'>Kanban</h1>
          </div>
          <div className='flex flex-col items-start'>
            {/* {boards.map((a) => {
              <div>{a}</div>
            })} */}
            <div className='pb-6 px-12 text-xs'>ALL BOARDS (8)</div>
            <button className='pb-6 px-12 focus:bg-indigo-800 border'>Platform Launch</button>
            <button className='pb-6 px-12 buttons'>Marketing Plan</button>
            <button className='pb-6 px-12 buttons'>Roadmap</button>
            <button onClick={handleCreateNewBoard} className='pb-4 px-12'>+ Create New Board</button>
          </div>
        </div>
        <div className='flex flex-col justify-between h-30 mb-4'>
          <div className='h-12 bg-slate-400'>Toggle Dark Mode</div>
          <div className='h-12 bg-slate-600'>Hide Sidebar</div>
        </div>
      </div>
      <div className="card">
        xxxxxxxxxxxxxxxxxxxxxxx
      </div>
    </div>
  )
}

export default App
