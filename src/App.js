import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }
const user={
  name:'gogo',
  imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize:90,
}
export default function Profile(){
  return(
    <>
    <h1>{user.name}</h1>
    <img className='avatar'
    src={logo}
    alt={'photo of '+user.name}
    style={{
      width:user.imageSize,
      height:user.imageSize
    }}
    ></img>
    </>
  );
}

