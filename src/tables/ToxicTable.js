import React from 'react'


const ToxicTable = (props) => (

        <table>
            <thead>
            <tr>
                <th>No</th>
                <th>Your sentence</th>
                <th>% of toxicity</th>
                <th><span role="img" aria-label="skull-and-love">💀 / 😍</span></th>
                <th>Label</th>
                <th>Toxic points</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                    {props.sentences.map((input) => (
                        <tr key={input.index > 0 ? input.index : null}>

                            <td>{input.index}</td>
                            <td>{input.sentence}</td>
                            <td>{input.prediction}</td>
                            <td><h2>{input.emoji}</h2></td>
                            <td>{input.label}</td>
                            <td>{input.point}</td>

                            <td>
                                <button onClick={() => props.deleteSentence(input.index)}>Delete this sentence</button>
                                <button onClick={() => props.deleteAll(input.index)}>Delete all sentences</button>
                            </td>
                        </tr>
                    ))}
            </tbody> 
        </table>
        )
 
export default ToxicTable


