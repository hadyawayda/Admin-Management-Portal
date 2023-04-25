import { useEffect, useState } from "react";

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

function Main() {
  const [boards, setBoards] = useState<Boards[]>([]);
  async function getData() {
    const res = await fetch('./data.json');
    const data = await res.json();
    console.log(data.boards[1].columns);
    setBoards(data.boards);
  }
  
  useEffect(() => {
    getData();
  }, [])
  
  return ( 
    <div className="flex flex-row justify-around h-full p-8">
      <div>
        {boards.map((board) => (
          <div className="flex flex-row justify-between p-8">
            {board.columns.map((column) => (
              <div>{column.name}</div>
            ))}
          </div>
        ))}
      </div>
      
    </div>
   );
}

export default Main;