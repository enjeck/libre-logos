import styled from "styled-components"
import { TransitionGroup } from "react-transition-group"

export const StyledGroup = styled(TransitionGroup)`
  height: 100%;
  width: 100% !important;
`

export const Item = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 15px;
`
