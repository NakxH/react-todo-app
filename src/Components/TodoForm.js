import React from 'react'

export const TodoForm = () => {
  return (
    <div className='w-1/2 bg-slate-800 text-white text-xl rounded-md m-8 p-4 flex justify-center'>
      <label>
        Name: Enter New Todo
        <input classname='' type='text' name='todo-input'></input>
      </label>
    </div>
  )
}