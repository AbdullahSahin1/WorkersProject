import React from 'react'
import Card from '../UI/Card'

const WorkerList = (props) => {
  return (
    <Card className='mt-10'>
        <ul>
            <li className='flex justify-between p-2'>
                <span className='font-bold'>İsim</span>
                <span className='font-bold'>Maaş</span>
            </li>
            {props?.workers.map((workers)=>(
                <li className='flex justify-between cursor-pointer hover:shadow-xl p-2 duration-100'>
                <span>
                    Emin Başbayan
                </span>
                <span>6000</span>
            </li>
            ))}
        </ul>
    </Card>
  )
}

export default WorkerList
