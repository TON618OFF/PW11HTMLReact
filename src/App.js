import React from "react";
import Header from "./components/Header.js"
import FirstCard from './components/FirstCard.js'
import SecondCard from './components/SecondCard.js'
import ThirdCard from './components/ThirdCard.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  render() {
    return(
    
      <div>

        <Header/>
        <FirstCard/>
        <SecondCard/>
        <ThirdCard/>
        <Footer/>

      </div>
      
      
    )
  }
}

export default App