import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <p>
        Hello, My Beutiful Friends!
        I am Yash Singhal, I am 23 years old guy, that loves to 
        build things.
        Thank you! for visting my Blog!
    </p>
  </Layout>
)

export default AboutPage
