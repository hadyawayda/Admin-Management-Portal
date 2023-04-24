import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

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

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subtasks, setSubtasks] = useState<Subtasks[]>([{title: 'e.g. Make coffee', isCompleted:false}, {title: 'e.g. Drink coffee & smile', isCompleted:false}]);
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [status, setStatus] = useState('')
  
  function handleSubtask() {
    setSubtasks([...subtasks, {
      title: title,
      isCompleted: false
    }])
  }
  function handleRemoveSubtask(title: string) {
    setSubtasks(subtasks.filter(s => s.title !== title))
  }

  return (
    <div>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="inset-0 fixed bg-indigo-400 bg-opacity-10 backdrop-blur h-full" />
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
            <Dialog.Panel className="w-full h-full max-w-xl transform overflow-hidden rounded-2xl task-background p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-white"
              >
                Add New Task
              </Dialog.Title>
              <div className="flex flex-col mt-8 justify-between">
                Title
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder={'e.g Take coffee break'}
                  className='task-background mt-2 border-gray-500 border-opacity-30 border-solid border-2 rounded-md h-12 p-4 text-gray-500' />
              </div>
              <div className="flex flex-col mt-8 justify-around">
                Description
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder={"e.g It's always good to take a break. This 15 minutes break will recharge the batteries a little."}
                  className='task-background mt-2 p-4 border-gray-500 border-opacity-30 border-solid border-2 rounded-md h-36 text-gray-500 align-text-top' />
              </div>
              <div className="flex flex-col mt-8 justify-around">
                Subtasks
                {subtasks.map((subtask) => (
                  <div className="flex justify-between items-center">
                    <input key={subtask.title} type="text" onChange={handleSubtask} placeholder={subtask.title}
                    className='task-background grow mt-3 border-gray-500 border-opacity-30 border-solid border-2 rounded-md h-11 p-4 text-gray-500' />
                    <button type="button" onClick={() => handleRemoveSubtask(subtask.title)} className="w-8 ml-2 mt-2.5 flex justify-center items-center">
                      <svg className="" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                    </button>
                  </div>  
                ))}
                
                <button className='bg-white mt-4 p-3 rounded-full indigo-text transition-colors duration-500 '>+ Add New Subtask</button>
              </div>
              <div className="flex flex-col mt-8 justify-around">
                Status
                <select name="address" value={status} onChange={e => setStatus(e.target.value)}
                  className='task-background mt-2 border-gray-500 border-opacity-30 border-solid border-2 rounded-md h-12 px-4 text-white'>
                  <option value="Todo">Todo</option>
                  <option value="Doing">Doing</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <button
                type="submit"
                className="inline-flex justify-center w-full mb-4 mt-8 rounded-full bg-indigo-500 p-3
                  text-white transition-colors duration-500 indigo"
              >
                Create Task
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </div >
  );
}

export default Form ;