'use client'

import React, { useState } from 'react'
import { 
  EligibilitySection, 
  ContentWrapper, 
  SectionHeading, 
  FAQ, 
  FAQItem, 
  Question, 
  Answer,
  ToggleIcon,
  CTABlock,
  CTAHeading,
  CTAButton
} from './eligibility-styles'

const faqs = [
  {
    question: 'Who can claim a logo?',
    answer: 'Active open source projects with regular commits, multiple contributors, over 100 GitHub stars, and a Git history spanning over 1 year. Registered NGOs are also eligible.'
  },
  {
    question: 'How do I claim a logo?',
    answer: 'Create a GitHub issue using our "logo request" template. Fill out all required information about your project. Your request will be reviewed, and if eligible, the logo copyright will transfer to you.'
  },
  {
    question: 'What do I receive?',
    answer: 'Once approved, you receive original SVG files, high-resolution PNG exports, and full copyright ownership of the logo. You can trademark it and use it however you wish.'
  },
  {
    question: 'Is there really no cost?',
    answer: 'Absolutely free. No hidden fees, no strings attached. This project exists to support the open source community and NGOs making a difference.'
  }
]

const Eligibility = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <EligibilitySection>
      <ContentWrapper>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <FAQ>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <Question onClick={() => toggleFAQ(index)}>
                {faq.question}
                <ToggleIcon $isOpen={openIndex === index}>
                  {openIndex === index ? '−' : '+'}
                </ToggleIcon>
              </Question>
              <Answer $isOpen={openIndex === index}>
                {faq.answer}
              </Answer>
            </FAQItem>
          ))}
        </FAQ>

        <CTABlock>
          <CTAHeading>Ready to elevate your brand?</CTAHeading>
          <p>Browse our collection and find the perfect logo for your project.</p>
          <CTAButton href="/available" className="btn-primary">
            Claim Your Logo
          </CTAButton>
        </CTABlock>
      </ContentWrapper>
    </EligibilitySection>
  )
}

export default Eligibility
