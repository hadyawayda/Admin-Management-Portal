import { useEffect, useState } from 'react'
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

type Columns = {
  name: string,
  tasks: Tasks[],
}

type Boards = {
  name: string,
  columns: Columns[],
}

function App() {
  const [boards, setBoards] = useState<Boards[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [createBoard, setCreateBoard] = useState(false);

  async function getData () {
    const res = await fetch('/data.json');
    const data = await res.json();
    setBoards(data.boards);
  }
  useEffect(() => {
    getData();
  }, [])
  console.log(boards);

  function handleSidebar () {
    setIsSidebarOpen(!isSidebarOpen)
  }
  function handleCreateBoard() {
    setCreateBoard(true)
  }
  function handleCloseCreateBoard() {
    setCreateBoard(false)
  }
  console.log(isSidebarOpen)
  return (
    <div className="flex justify-between h-screen w-full">
      <div
        tabIndex={!isSidebarOpen ? 0 : -1}
        onClick={!isSidebarOpen ? handleSidebar : undefined}
        className={`flex flex-col justify-between w-80 sm:w-80 border-r-2 
        border-r-gray-600 border-opacity-40 transition-all sidebar
        ${isSidebarOpen ? '' : 'hover:bg-indigo-600 sidebar-open'}`
        }>
        <div className='flex flex-col'>
          <div className='flex flex-col mb-6 justify-between h-20 px-12'>
            <h1 className='pt-6 text-4xl text-white'>Kanban</h1>
          </div>
          <div className='py-3 px-6 sm:px-12 spacing'>ALL BOARDS (8)</div>
          <div className='flex flex-col items-start pr-6'>
            {boards.map((a) => (
              <button className='buttons py-3 pl-6 sm:pl-12 text-left w-full rounded-r-full transition-all duration-300 boards'>{a.name}</button>
            ))}
          </div>
          <div>  
            <button onClick={handleCreateBoard} className='py-3 pl-6 sm:pl-12'>+ Create New Board</button>
          </div>
        </div>
        <div className='flex flex-col justify-between h-30'>
          <div className='h-12 toggle text-center mx-6 rounded-md py-3'>Toggle Dark Mode</div>
          <button onClick={handleSidebar} className='h-20 text text-center py-4'>Hide Sidebar</button>
          
        </div>
      </div>
      <div className="card">
        xxxxxxxxxxxxxxxxxxxxxxx
      </div>
      {createBoard
        ? <div onClick={handleCloseCreateBoard} className='absolute transition-all duration-700
          bg-blue-400 bg-opacity-10 backdrop-blur-md h-full w-full flex justify-center items-center'>
            <div onClick={undefined} className='bg-indigo-800 opacity-80 w-60 h-60 rounded-3xl'>
              aaaaaaa
            </div>
          </div>
        : null}
    </div>
  )
}

export default App
