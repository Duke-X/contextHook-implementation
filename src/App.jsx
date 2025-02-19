import React, { useState, useContext, createContext } from 'react'
import './App.css'

const Light = createContext();

function LighProvider({children}){
  const [bulbOn, setBulbOn] = useState(true);

  return <>
    <Light.Provider value={{bulbOn, setBulbOn}}>
      {children}
    </Light.Provider>
  </>
}

function Parent(){
  return <LighProvider>
    <Switch/>
    <Value/>
  </LighProvider>
}

function Switch(){
  const {bulbOn, setBulbOn} = useContext(Light);
  return <button onClick={() => setBulbOn(!bulbOn)}>Switch</button>
}

function Value(){
  const {bulbOn} = useContext(Light);
  return <>
    {bulbOn ? "Bulb On" : "Bulb Off"}
  </>
}

function App() {
  return (
    <div>
      <Parent/>
    </div>
  )
}

export default App
