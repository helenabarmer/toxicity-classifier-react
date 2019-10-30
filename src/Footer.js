import React from 'react'

const Footer = () =>{

    return(
        
        <footer className="footer">

            

            <div>
                <a href="https://github.com/helenabarmer/toxicity-classifier-react" rel="noopener noreferrer" target="_blank">Source code</a>
            </div>

            <div>
                <a href="https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge/data" rel="noopener noreferrer" target="_blank">Dataset</a>
            </div>

            <div>
                <a href="https://github.com/tensorflow/tfjs-models" rel="noopener noreferrer" target="_blank">Tensorflow.js</a>
            </div>


            <div>
                <a href="mailto:helena.barmer@gmail.com" rel="noopener noreferrer">
                    <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
            </div>

            

            <div>
                <a href="https://www.linkedin.com/in/helenabarmer/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </a></div>

          


            <div>
                <a href="https://github.com/helenabarmer" rel="noopener noreferrer" target="blank">
                    <i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
            </div>

           
                
        </footer>
        

    )
}

export default Footer