import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <div>
            <UserForm title='Register' onSubmit={activateAuth} />
            <UserForm title='Log In' onSubmit={activateAuth} />
          </div>
        )
      }
    }
  </Context.Consumer>
)
