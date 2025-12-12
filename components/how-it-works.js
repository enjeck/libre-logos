'use client'

import React from 'react'
import { ProcessSection, ProcessHeading, ProcessGrid, ProcessStep, StepNumber, StepContent } from './how-it-works-styles'

const steps = [
  {
    number: '01',
    title: 'Browse Available Logos',
    description: 'Explore our collection of exclusive, professionally designed logos waiting to be claimed.'
  },
  {
    number: '02',
    title: 'Check Eligibility',
    description: 'Ensure your open source project or NGO meets our eligibility criteria for claiming a logo.'
  },
  {
    number: '03',
    title: 'Submit Your Request',
    description: 'Create a GitHub issue using our logo request template with your project details.'
  },
  {
    number: '04',
    title: 'Get Your Logo',
    description: 'Once approved, receive full copyright transfer and high-resolution files for your brand.'
  }
]

const HowItWorks = () => {
  return (
    <ProcessSection>
      <ProcessHeading>How It Works</ProcessHeading>
      <ProcessGrid>
        {steps.map((step, index) => (
          <ProcessStep key={index}>
            <StepNumber>{step.number}</StepNumber>
            <StepContent>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </StepContent>
          </ProcessStep>
        ))}
      </ProcessGrid>
    </ProcessSection>
  )
}

export default HowItWorks
