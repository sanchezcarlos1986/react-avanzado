import React from 'react'
import { userInputValue } from '../../hooks/userInputValue'

export const UserForm = ({ onSubmit }) => {
  const email = userInputValue('')
  const password = userInputValue('')

  return (
    <form onSubmit={onSubmit}>
      <input required type='email' placeholder='Email' {...email} />
      <input required type='password' placeholder='Password' {...password} />
      <button>Log In </button>
    </form>
  )
}
