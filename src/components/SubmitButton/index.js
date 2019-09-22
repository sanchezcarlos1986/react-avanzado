import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ onClick, disabled, children }) => (
  <Button onClick={onClick} disabled={disabled}>
    {children}
  </Button>
)

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}
