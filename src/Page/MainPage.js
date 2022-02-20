import React from 'react'
import { Header } from '../Components/Header'
import { TodoForm } from '../Components/TodoForm'

export const MainPage = () => {
  return (
    <div>
      <Header></Header>
      <TodoForm></TodoForm>
    </div>
  )
}