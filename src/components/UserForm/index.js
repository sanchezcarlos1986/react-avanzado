import React, { Fragment } from 'react'
import { userInputValue } from '../../hooks/userInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = userInputValue('')
  const password = userInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input required type='email' placeholder='Email' {...email} />
        <Input required type='password' placeholder='Password' {...password} />
        <Button>{title}</Button>
      </Form>
    </Fragment>
  )
}
