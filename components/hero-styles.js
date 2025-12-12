import styled from 'styled-components'

export const HeroSection = styled.section`
  padding: var(--space-2xl) var(--space-md);
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: var(--space-2xl) var(--space-xl);
  }
`

export const HeroContent = styled.div`
  width: 100%;
  max-width: 900px;
`

export const HeroSubheading = styled.h5`
  color: var(--primary-color);
  margin-bottom: var(--space-sm);
  font-weight: 600;
  letter-spacing: 0.1em;
`

export const HeroHeading = styled.h1`
  margin-bottom: var(--space-lg);
  color: var(--text-dark);
  
  .highlight {
    position: relative;
    display: inline-block;
    color: var(--primary-color);
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0.1em;
      width: 100%;
      height: 0.3em;
      background: linear-gradient(90deg, rgba(255, 55, 0, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%);
      z-index: -1;
      border-radius: 4px;
    }
  }
`

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-medium);
  margin-bottom: var(--space-xl);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`

export const HeroActions = styled.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);

  button {
    min-width: 180px;
  }
`

export const BadgeWrapper = styled.div`
  margin-top: var(--space-xl);
  
  img {
    transition: transform 0.3s ease;
  }

  a:hover img {
    transform: translateY(-2px);
  }
`
