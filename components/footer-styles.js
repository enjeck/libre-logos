import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background: var(--text-dark);
  color: var(--bg-white);
  margin-top: var(--space-2xl);
`

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-lg);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    padding: var(--space-2xl) var(--space-xl);
  }
`

export const FooterSection = styled.div`
  h4 {
    color: var(--bg-white);
    font-size: 1.125rem;
    margin-bottom: var(--space-md);
    font-weight: 700;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: var(--space-sm) 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: var(--space-sm);
  }

  a {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
      color: var(--primary-color);
      transform: translateX(4px);
    }
  }
`

export const Blurb = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`
