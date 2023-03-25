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
  const [createBoards, setCreateBoards] = useState(false);
  const [isSidebar, setIsSidebar ] = useState(true);

  async function getData () {
    const res = await fetch('/data.json');
    const data = await res.json();
    setBoards(data.boards);
  }
  useEffect(() => {
    getData();
  }, [])

  console.log(boards);


  function handleCreateNewBoard (e : React.MouseEvent) {
    setCreateBoards(true)
  }
  function handleSidebar () {
    setIsSidebar(!isSidebar)
  }
  console.log(isSidebar)
  return (
    <div className="flex justify-between h-screen w-full">
      <div className={`flex flex-col justify-between w-80 sm:w-80 border-r-2 border-gray-600 border-opacity-40 transition-all ${isSidebar ? 'sidebar-open' : ''}`}>
        <div className='flex flex-col'>
          <div className='flex flex-col mb-6 justify-between h-20 px-12'>
            <h1 className='pt-6 text-4xl text-white'>Kanban</h1>
          </div>
          <div className='py-3 px-6 sm:px-12 spacing'>ALL BOARDS (8)</div>
          <div className='flex flex-col items-start pr-6'>
            {boards.map((a) => (
              <button className='buttons py-3 pl-6 sm:pl-12 text-left w-full rounded-r-full boards'>{a.name}</button>
            ))}
          </div>
          <div>  
            <button onClick={handleCreateNewBoard} className='py-3 pl-6 sm:pl-12'>+ Create New Board</button>
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
    </div>
  )
}

export default App
