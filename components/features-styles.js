import styled from "styled-components"

export const Boxes = styled.section`
  padding: var(--space-2xl) var(--space-md);
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: var(--space-2xl) var(--space-xl);
  }

  div {
    background: var(--bg-white);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-md);
    text-align: center;
    padding: var(--space-xl);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    &:hover {
      transform: translateY(-8px);
      border-color: var(--primary-color);
      box-shadow: 0 12px 32px rgba(255, 55, 0, 0.15);

      &::before {
        transform: scaleX(1);
      }

      img {
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }

  img {
    width: 70px;
    height: 70px;
    margin: 0 auto var(--space-md);
    opacity: 0.8;
    transition: all 0.4s ease;
  }

  h4 {
    text-transform: none;
    letter-spacing: 0;
    margin: 0 0 var(--space-sm) 0;
    color: var(--text-dark);
    font-weight: 700;
    font-size: 1.25rem;
  }

  p {
    margin: 0;
    color: var(--text-medium);
    line-height: 1.6;
    font-size: 0.95rem;
  }
`
