import React, { useState } from 'react'
import * as toxicity from '@tensorflow-models/toxicity'

const AddSentenceForm = props => {

    const addModel = () =>{
        const threshold = 0.9
        
        toxicity.load(threshold).then(model => {
            model.classify([sentence.input]).then(predictions => {

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
              const randomNiceWords = arrayNiceWords[Math.floor(Math.random()*arrayNiceWords.length)]
              //console.log("This is random" + random);
              
            //let mathRoundPrediction = Math.round(prediction * 100);
            //let toxic = Math.round(probab * 100) +  "%";
                
    
           if(isToxic || isToxic === null || sentence.input === "Donald Trump" || sentence.input === "Tobbe"){
             
            for(let pred of predictions){
                sentence.label = pred.label.toUpperCase() 
                console.log(pred.label); 
           }

            let pred;
            predictions.forEach((item) => {
            pred = item.label}
            );
            console.log("Test prediction" + pred);
            
           
            sentence.prediction = Math.round(probab * 100) +  "%"
            sentence.emoji = String.fromCodePoint(0x1F614)
            props.addSentence(sentence)
            setSentence(initialFormState)
            //console.log("This is toxic!");
            //console.log("Probabilities for this being insulting " + isToxic);
            //console.log(predictions);
          }
          else{
            sentence.label = randomNiceWords;
            sentence.prediction = Math.round(probab * 100) +  "%";
            sentence.emoji = String.fromCodePoint(0x1F60D);
            props.addSentence(sentence);
            setSentence(initialFormState);
            //console.log("This is not toxic");
            //console.log(predictions);
          }
        });
      });
    }
 
    const initialFormState = {id: 'null', input: '', predicition: '', emoji: '', label: ''}
    
    const [sentence, setSentence] = useState(initialFormState)
    
    const handleInputChange = event => {
        const { name, value } = event.target
        setSentence({ ...sentence, [name]: value })
    }

    
    return (
        <form
        onSubmit={event => {  
            event.preventDefault()
            if (!sentence.input) return
            
            addModel()
        }}
        >
            <input id="input" type="text" name="input" placeholder="Write a sentence here" value={sentence.input} onChange={handleInputChange} />
            <button>Check toxicity</button>
        </form>
    )
    }


export default AddSentenceForm