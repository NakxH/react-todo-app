import React from 'react'

export const TodoForm = () => {
  return (
    <div className='flex justify-center'>
      <div className='border-2 border-slate-800	w-1/2 text-xl mb-2 mx-8 rounded-md p-4'>
        <div className='text-black flex justify-between'>
        <label>
          Enter new Todo:<span className='mr-2'></span>
          <input type='text' name='todo-input'></input>
        </label>
          <button type='submit' className='border-2 border-slate-800 rounded-md px-4'>Add</button>
        </div>
      </div>
    </div>
  )
}