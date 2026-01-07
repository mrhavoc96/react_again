import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const banana = [
    {
      img: "https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfied",
      color:"royalblue",
      status: "Have you ever wondered how the Banking around the world can only satisfy just a few so many, want to be satisfied too?",
    },
    {
      img: "https://images.unsplash.com/photo-1616769364512-1e50e8266907?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Fufilled",
      color:"lightblue",
      status: "Peace is a beautiful state of mind and in logistics throughout the globe, especially in remote places",
    },
    {
      img: "https://images.unsplash.com/photo-1665407429897-6a22a9ced620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
      tag: "Content",
      color:"royalblue",
      status: "Underbanking causes a lot of monetary loss and stark inneficiencies in logistics throughout the globe, especially in remote places",
    },
    {
      img: "https://images.unsplash.com/photo-1655216068156-ebc1ebd7f154?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Underserved",
      color:"black",
      status: "No Being Underserved might seem like a small issue to you but it is only once somebody steps into banking that they realize that is a major convenience issue.",
    }
    
    
  ]

  return (
    <>
      <Section1 users = {banana}/>
      <Section2/>
    </>
  )
}

export default App