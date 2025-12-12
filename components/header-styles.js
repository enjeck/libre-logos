import styled from "styled-components"

export const Head = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: var(--space-md) var(--space-lg);
  transition: all 0.3s ease;

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-md);
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  
  img {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: rotate(-5deg) scale(1.05);
  }

  h1 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: var(--space-sm);
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      
      a {
        display: block;
        padding: var(--space-sm) var(--space-md);
        color: var(--text-dark);
        font-weight: 500;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: all 0.3s ease;
        border-radius: var(--radius-sm);

        &:hover {
          color: var(--primary-color);
          background: rgba(255, 55, 0, 0.05);
        }

        &.active {
          color: var(--primary-color);
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-xs);

      li a {
        padding: var(--space-xs) var(--space-sm);
        font-size: 0.85rem;
      }
    }
  }
`
