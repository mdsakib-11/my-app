import React from 'react'
import './index.css'
import Card from './components/Card'
function App() {
    return  <div>
                <h2 className="headerStyle">Todo App</h2>
                <Card textTitle = "Smith Coue" descText = "This Is Smith here."/>
                <Card textTitle = "Bold Coue" descText = "This Is Bold here."/>
                <Card textTitle = "Jhon Coue" descText = "This Is Jhon here."/>
                <Card textTitle = "Robart Coue" descText = "This Is Robart here."/>
            </div>
}

export default App;