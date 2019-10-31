import React, { useState } from 'react';
import './App.css';
import ToxicTable from './tables/ToxicTable';
import AddSentenceForm from './forms/AddSentenceForm';
import Footer from './Footer.js'; 


const App = () => {
  
  // Example of how the information will be displayed in the table
  const sentenceData = [
    { index: 1, sentence: 'Something you wrote here', prediction: "100%?", emoji: <span role="img" aria-label="skull">💀</span>, label: 'Hopefully not toxic', point: 0 }
  ]
  
  // State variable
  const [sentences, setSentences] = useState(sentenceData);

  // Add input sentence to the table from the input value
  const addSentence = input => {
    input.index = sentences.length + 1;
    setSentences([...sentences, input ])
  }
  
  // Delete one sentence from the table
  const deleteSentence = index => {
    setSentences(sentences.filter(input => input.index !== index))
  }

  // Delete all sentences from the table
  const deleteAll = (index) => {
    setSentences(sentences.filter(input => input.index.length !== index.length))
  }


  return (
    <div className="App">
       <div className="footer">
       <Footer />
       </div>
      <div className="inputs">
        <div className="InputForm">
          <h2 id="check">Add a sentence</h2>
          <AddSentenceForm addSentence={addSentence}/>
        </div>
        <div className="ToxicTable">
          <ToxicTable sentences={sentences} deleteSentence={deleteSentence} deleteAll={deleteAll}/>
        </div>
        </div>
       
        
    </div>
    
  );
}

export default App;




      







