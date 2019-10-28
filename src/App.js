import React, { useState } from 'react';
//import poison from './poison.jpg';
import './App.css';
import ToxicTable from './tables/ToxicTable';
import AddSentenceForm from './forms/AddSentenceForm';
import Footer from './Footer.js'; 


const App = () => {

  const sentenceData = [
    { index: 1, sentence: 'Something you wrote here', prediction: "100%?", emoji: <span role="img" aria-label="skull">💀</span>, label: 'Hopefully not toxic', point: 0 }
  ]

  const [sentences, setSentences] = useState(sentenceData);

  const addSentence = input => {
    input.index = sentences.length + 1;
    setSentences([...sentences, input ])
  }

  const deleteSentence = index => {
    setSentences(sentences.filter(input => input.index !== index))
  }

  const deleteAll = (index) => {
    setSentences(sentences.filter(input => input.index.length !== index.length))
    
  }



  return (
    <div className="App">
      <h1>Are you toxic?</h1>
      <div className="inputs">
        <div className="InputForm">
          <h2>Add your sentence here</h2>
          <AddSentenceForm addSentence={addSentence}/>
        </div>
        <div className="ToxicTable">
          <h2>View sentences</h2>
          <ToxicTable sentences={sentences} deleteSentence={deleteSentence} deleteAll={deleteAll}/>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;











