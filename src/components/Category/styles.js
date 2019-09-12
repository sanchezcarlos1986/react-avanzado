import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
  border-radius: 50%;
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 75px;
  object-fit: cover;
  overflow: hidden;
  width: 75px;
`
