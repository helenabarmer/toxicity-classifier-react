import React, { useState } from 'react'
import * as toxicity from '@tensorflow-models/toxicity'


const AddSentenceForm = (props) => {

    const initialFormState = { index: null, sentence: '', predicition: '', emoji: '', label: '', point: 0 }

    // State variable 
    const [input, setInput] = useState(initialFormState);
    
    // Counter for Karma Points
    const [count, setCount] = useState(0);
    
    // Adding pre-trained model from tensorflow.js
    const addModel = () =>{

      // Only probabilites above 90%
      const threshold = 0.9

      // Load pre-trained model from tensorflow.js
      toxicity.load(threshold).then(model => {

        model.classify([input.sentence]).then(predictions => {
          
          // Loop to check if the sentence is toxic
            let isToxic;
            predictions.forEach((item) => {
              isToxic = item.results[0].match;
               });
            
            // Loop to check probabilities for this being toxic
            let probab;
            predictions.forEach((item) => {
            probab = item.results[0].probabilities[1];});
            console.log("This is probab " + probab);
            
            // Array for label if sentence is not toxic
            const arrayNiceWords = [
              "Thank you for writing something nice", 
              "That was nice of you", 
              "You are a nice person",
              "That is very kind of you",
              "You are such a sweet person",
              "Good karma is coming for you",
              "Thank you",
              "Keep on being wonderful",
              ]
            
            // Random display of array
            const randomNiceWords = arrayNiceWords[Math.floor(Math.random()*arrayNiceWords.length)]

            // If matches "true" (sentence is toxic)
            if(isToxic || isToxic === null || input.sentence === "Donald Trump" || input.sentence === "Tobbe"){

              // Labels in dataset, display label in table
              for(let pred of predictions){
                input.label = pred.label.toUpperCase() 
                console.log("Label " + pred.label); 
              }

              input.prediction = Math.round(probab * 100) +  "%" // Predictions in %
              input.emoji = <span role="img" aria-label="skull">💀</span> //Emoji displayed
              input.point = 1; // Point set to 1 if the sentence is toxic
              setCount(count + 1); // Set count to point + 1 if toxic
              props.addSentence(input) // Add sentence to table
              setInput(initialFormState) // Set state
              //console.log("This is toxic!");
              console.log("Probabilities for this being insulting " + isToxic);
              console.log(predictions);
              }

            // Match is false (sentence is not toxic)  
            else{
              input.prediction = Math.round(probab * 100) +  "%";
              input.emoji = <span role="img" aria-label="love">😍</span>
              input.label = randomNiceWords; // Random sentence from array instead of label
              props.addSentence(input); // Add sentence to table
              setInput(initialFormState); // Set state
              //console.log("This is not toxic");
              console.log(predictions);
          }
        });
      });
    }

    // Input value
    const handleInput = event =>{
        const {name, value} = event.target;
        setInput({...input, [name]: value});
    }
    
    // Clear input field
    const resetForm = () =>{setInput(initialFormState)};

    // Submit model, if no input nothing adds to the table
    const onSubmitEvent = event => {
        event.preventDefault()
        
        // If no input, return 
        if(!input.sentence)return

        // Add toxic classifier model to table
        addModel()
    }

    // Reset Karma Points
    const onClickReset = event => {
      event.preventDefault();
      setCount(count - count);
    }

    return(
        <div className="input-form">
           <div className="input-sentence">
                <h2 id="show-sentence">{input.sentence}</h2>
            </div>
            <form onSubmit={onSubmitEvent}>
            <input id="input" type="text" autoComplete="off" placeholder="Think about your karma" name="sentence" value={input.sentence} onChange={handleInput} />
            <button>Check if your sentence is toxic</button> 
            </form>
            
            <button id="reset-input" onClick={resetForm}>Clear input</button>
          
            <div className="toxic-form">
                <h2 id="toxic-points">Toxic Points: {count}</h2>
                <button type="reset" onClick={onClickReset}>Reset Toxic Points</button>
            </div>
        </div>
    )
}

export default AddSentenceForm







    
