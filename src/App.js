import React from 'react'
import DropComp from './components/DropComp'
import EffectChanges from './components/EffectChanges'

const App = () => {
  return (
    <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      paddingTop: "50px",
      backgroundColor: "#f5f8ff"
    }}
    >
      <DropComp/>
    </div>
  )
}

export default App