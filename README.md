![logo](https://github.com/helenabarmer/toxicity-classifier-react/blob/master/heroku.png)

# React Toxicity classifier
The React Toxicity Classifier is importing a pre-trained model from [tensorFlow.js](https://github.com/tensorflow/tfjs-models). The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Labels
The pre-trained model is a [toxicity classifier](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) that will detect if the text you write in the input field is classified within 7 different labels:

| Labels        | 
| ------------- |      
| toxic         | 
| severe_toxic  | 
| obscene       | 
| threat        | 
| insult        | 
| identity_hate | 

The toxicity classifier will return a true (is toxic) or false (not toxic) depending on the input sentence. 

### Input field
- The sentence in the input field is submitted through a button and then sent to the pre-trained model.
- The input field can be cleared through a button.

### Toxic points
- For every sentence that is labelled true (within the 7 different labels) a toxic point will be added underneath the input field.
- There is a button that will clear the toxic points.

### Table
A submitted sentence will be displayed in the table with the following information: 
- How much % of toxicity the sentence contains
- An emoji that will switch between a happy one and a skull
- Toxic points that will increase every time the input sentence is labelled “true”
- A button to delete one sentence at a time
- A button to delete all sentences from the table

### Footer
At the top of the page the following links are displayed:
- Source code
- Dataset
- Toxicity classifier
- Tensorflow.js
- Contact information: E-mail, LinkedIn and GitHub


## Dataset
- [**Dataset: Toxic Comment Classification Challenge from Kaggle**](https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge/data)

## Tensorflow.js
- [Pre-trained TensorFlow.js models](https://github.com/tensorflow/tfjs-models)
- [Toxicity classifier from Tensorflow.js](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)

## To-do
- [x] Add requirements
- [x] Implement the pre-trained [toxicity classifier](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) in the code
- [x] Add React

## Deployment
- Deployed to [Heroku](https://www.heroku.com)
- Live demo [here](https://react-toxicity-classifier.herokuapp.com/)

## Learn More About React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


