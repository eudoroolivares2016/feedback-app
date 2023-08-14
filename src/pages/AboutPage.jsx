import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <>
    <Card>This is a feedback application for reviews</Card>

    <Link to={'/'}>
      Return to Home page
    </Link>
    </>
  ) 
}

export default AboutPage