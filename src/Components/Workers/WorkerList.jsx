import React from 'react'
import Card from '../UI/Card'

const WorkerList = (props) => {
    const { workers, setWorkers } = props;
  if (workers.length<1) {
    return;
  }
    const deleteWorker = (id) => {
    setWorkers(
      workers.filter((item) => item.id !== id)
    );
  };
  return (
   <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        {workers.map((worker) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl p-2 duration-100"
            key={worker.id}
            onClick={() => deleteWorker(worker.id)}
          >
            <span>{worker.name}</span>
            <span>{worker.wage} $</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default WorkerList
