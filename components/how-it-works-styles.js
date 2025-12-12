import styled from 'styled-components'

export const ProcessSection = styled.section`
  padding: var(--space-2xl) var(--space-md);
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: var(--space-2xl) var(--space-xl);
  }
`

export const ProcessHeading = styled.h2`
  margin-bottom: var(--space-xl);
  color: var(--text-dark);
`

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  margin-top: var(--space-xl);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-lg);
  }
`

export const ProcessStep = styled.div`
  text-align: left;
  position: relative;
  padding: var(--space-lg);
  background: var(--bg-light);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`

export const StepNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
  opacity: 0.3;
  margin-bottom: var(--space-sm);
  font-family: var(--font-display);
`

export const StepContent = styled.div`
  h4 {
    margin-top: 0;
    margin-bottom: var(--space-sm);
    color: var(--text-dark);
    font-size: 1.25rem;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-light);
    line-height: 1.6;
  }
`
