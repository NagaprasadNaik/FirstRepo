import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Message from './Message';
// import { BrowserRouter } from 'react-router-dom';


// redux example************************
// import { createStore } from 'redux';

// const increment = () => {
//   return{
//     type : 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return{
//     type : 'DECREMENT'
//   }
// }

// const reducer = (state=0, action) => {
//   // eslint-disable-next-line default-case
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//   }
// }

// const store = createStore(reducer)

// store.subscribe(() => {console.log(store.getState())})

// store.dispatch(increment())


import reducer from './redux/index'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('ROOT'));
// root.render(
//   <React.StrictMode>
//     <Message>
//       <App />
//     </Message>

//   </React.StrictMode>
// );

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
