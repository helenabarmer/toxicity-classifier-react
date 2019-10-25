import React, { useState } from 'react';
//import poison from './poison.jpg';
import './App.css';
import UserTable from './tables/UserTable';
import AddSentenceForm from './forms/AddSentenceForm';
import Footer from './Footer.js';


const App = () => {

  // Example sentence with predicition and label
  // Array of inputs will be added here
  const sentencesData = [ {id: 1, input: 'You suck', prediction: '97%', emoji: String.fromCodePoint(0x1F614), label: 'TOXICITY'} ]

  // Hook
  const [sentences, setSentences] = useState(sentencesData)

  const addSentence = sentence => {
    sentence.id = sentences.length + 1
    setSentences([...sentences, sentence])
  }

  const deleteSentence = id => {
    setSentences(sentences.filter(sentence => sentence.id !== id))
  }

  return (
    <div className="container">
      <h1 id="is-it-toxic">Is it toxic?</h1>
      <div className="sentences">
        <div className="add-sentence">
          <h2>Add sentence</h2>
          <AddSentenceForm addSentence={addSentence} />
        </div>
        <div className="view-sentence">
          <h2>View sentences</h2>
          <UserTable sentences={sentences} deleteSentence={deleteSentence} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
