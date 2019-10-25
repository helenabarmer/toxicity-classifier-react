import React from 'react'


const UserTable = props => (
    <table>
        <thead>
            <tr className="table-header">
                <th>Sentence</th>
                <th>% of toxicity</th>
                <th> &#128532; / &#x1F60D; </th>
                <th>Label</th>
                <th>Remove sentence</th>
            </tr>
        </thead>

        <tbody id="inputs">
            {props.sentences.length > 0 ?(
                props.sentences.map(sentence => (
                    <tr key={sentence.id}>
                        <td>{sentence.input}</td>
                        <td>{sentence.prediction}</td>
                        <td>{sentence.emoji}</td>
                        <td>{sentence.label}</td>
                        <td>
                            <button onClick={() => props.deleteSentence(sentence.id)} className="button muted-button">Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr id="no-sentences">
                    <td colSpan={3}>No Sentences</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default UserTable