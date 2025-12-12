import styled from 'styled-components'
import Link from 'next/link'

export const EligibilitySection = styled.section`
  padding: var(--space-2xl) var(--space-md);
  background: var(--bg-light);

  @media screen and (min-width: 768px) {
    padding: var(--space-2xl) var(--space-xl);
  }
`

export const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

export const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: var(--space-xl);
  color: var(--text-dark);
`

export const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`

export const FAQItem = styled.div`
    background: var(--bg-white);
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 2px solid ${props => props.$isOpen ? 'var(--primary-color)' : 'var(--border-color)'};
    transition: all 0.3s ease;

    &:hover button {
        border-color: ${props => props.$isOpen ? 'transparent' : 'var(--primary-color)'};
    }
`

export const Question = styled.button`
  width: 100%;
  padding: var(--space-lg);
  background: transparent;
  border: none;
  text-align: left;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-dark);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
    background: transparent;
    transform: none;
    box-shadow: none;
  }
`

export const ToggleIcon = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--primary-color);
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: var(--space-md);
`

export const Answer = styled.div`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${props => props.$isOpen ? '0 var(--space-lg) var(--space-lg)' : '0 var(--space-lg)'};
  color: var(--text-medium);
  line-height: 1.7;
`

export const CTABlock = styled.div`
  text-align: center;
  margin-top: var(--space-2xl);
  padding: var(--space-xl);
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

  p {
    font-size: 1.125rem;
    margin-bottom: var(--space-lg);
  }
`

export const CTAHeading = styled.h3`
  margin-top: 0;
  margin-bottom: var(--space-sm);
  color: var(--text-dark);
`

export const CTAButton = styled(Link)`
  display: inline-block;
  background: var(--primary-color);
  color: white !important;
  padding: 14px 32px;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 55, 0, 0.3);
  }
`
