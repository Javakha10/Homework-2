import "./App.css";
import Child from "./Child.js";
import Parent from "./Parent";
import Wrapper from "./Wrapper.js";

// function App() {
//   return (
//     <div className="App">
//       <Child />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Parent />
      </Wrapper>
    </div>
  );
}

export default App;
