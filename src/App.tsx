import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
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
    const res = await fetch('./data.json');
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
              <button className='buttons py-3 pl-6 sm:pl-12 text-left w-full 
              rounded-r-full transition-all duration-300 boards'>{a.name}</button>
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
      <Transition appear show={createBoard} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseCreateBoard}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="inset-0 fixed bg-indigo-400 bg-opacity-10 backdrop-blur-md h-full" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleCloseCreateBoard}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default App
