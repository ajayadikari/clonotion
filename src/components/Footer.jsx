import React from 'react'
import Chunks from './Chunks'

const Footer = () => {
  const prop1 = {
    p1: 'Wikis',
    p2: 'Projects',
    p3: 'Docs',
    p4: 'Notion AI',
    p5: 'Whats New'
  }
  return (
    <>
      <Chunks {...prop1} />
      <h1>footer</h1>
    </>
  )
}

export default Footer
