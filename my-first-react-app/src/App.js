
import React,{Component} from 'react';
//Alias
import Pizza from './Pizza'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1> My first React App</h1>
//     </div>
//   );
// }


//Class based components
class App extends Component{
  render(){
    let dynamicName = 'React is mindblowing'
    let brand = "pizzahut"
    let description = "Best pizza in town"
    let brand2 = "Dominos"
    let description2 = "Best pizza in city"
    return (
      <div>
      <h2>{dynamicName}</h2>
      <Pizza brand={brand} description={description}></Pizza>
      <Pizza brand={brand2} description={description2}></Pizza>
      </div>
    )
  }
}; 

export default App;
