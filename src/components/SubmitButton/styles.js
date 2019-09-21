import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  display: block;
  height: 32px;
  text-align: center;
  width: 100%;
  &:disabled {
    opacity: .3;
  }
`
