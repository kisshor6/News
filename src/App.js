import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 9;
  const apiKey = "f99a7a8db72747a9a0f85566bcc39266"
  const [progress, setProgress] = useState(0)
  const country = "us";

  return (
    <Router>
      <Navbar />
      <LoadingBar height={3} color='#f11946'
        progress={progress} />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />

        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />} />

        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={pageSize} country={country} category="Entertainment" />} />

        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />} />

        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />} />

        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />} />

        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />} />
      </Routes>
    </Router>

  )
}
export default App;