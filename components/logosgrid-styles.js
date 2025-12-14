import styled from "styled-components"
// import { TransitionGroup } from "react-transition-group"

export const StyledGroup = styled.div`
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
  padding: var(--space-md);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    background: var(--bg-light);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

    img {
      transform: scale(1.05);
    }
  }

  img {
    transition: transform 0.3s ease;
  }
`
