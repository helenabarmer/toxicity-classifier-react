import React, { useState } from 'react';
//import poison from './poison.jpg';
import './App.css';
import UserTable from './tables/UserTable';
import AddSentenceForm from './forms/AddSentenceForm';

const App = () => {


  const sentencesData = [
    {id: 1, input: 'You suck', prediction: '78%', emoji: String.fromCodePoint(0x1F614), label: 'toxic'}
  ]

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
      <h1>Is it toxic?</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add sentence</h2>
          <AddSentenceForm addSentence={addSentence} />
        </div>
        <div className="flex-large">
          <h2>View sentences</h2>
          <UserTable sentences={sentences} deleteSentence={deleteSentence} />
        </div>
      </div>
    </div>
    
  )
}

export default App
