import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

 

const App = () => {
  return (
    
    <>
    <Navbar />

    <div className="parent">
      
      <Card user='shraddha' img='https://plus.unsplash.com/premium_photo-1775931094360-90a5f76e9aba?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='sakshi' img='https://images.unsplash.com/photo-1775904572110-0bb48444bc53?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='Mohini' img='https://images.unsplash.com/photo-1775873932006-032f1abff1c9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>

      

    </div>
    </>
  )
}

export default App
