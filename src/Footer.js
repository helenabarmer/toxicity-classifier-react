import React from 'react'

const Footer = props =>{

    return(
        
        <footer>
            <div>
                <a href="mailto:helena.barmer@gmail.com" rel="noopener noreferrer">
                    <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/helenabarmer/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </a></div>

            <div>
                <a href="https://github.com/helenabarmer/toxicity-classifier-react" rel="noopener noreferrer" target="blank">
                    <i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
            </div>

           
                
        </footer>
        

    )
}

export default Footer