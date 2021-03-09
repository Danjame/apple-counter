import React, { Component } from 'react'
import Header from './components/header'
import AppleList from './components/appleList'
import Footer from './components/footer'
import './App.css';

class App extends Component {
  render() {
      return (
      <section className="App">
        <Header />
        <AppleList />
        <Footer />
      </section>
    )
  }
}

export default App;