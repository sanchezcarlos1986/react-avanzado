import React, { Fragment } from 'react'
import { userInputValue } from '../../hooks/userInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = userInputValue('')
  const password = userInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} required type='email' placeholder='Email' {...email} />
        <Input disabled={disabled} required type='password' placeholder='Password' {...password} />
        <Button disabled={disabled}>{disabled ? 'Loading...' : title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}
