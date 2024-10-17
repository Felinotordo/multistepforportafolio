import "./App.css";
import Sidebar from "./component/Sidebar";
import { StepContextProvider } from "./context/stepcontext";

function App() {
  return (
    <div className="w-screen h-screen">
      <StepContextProvider>
        <Sidebar/>
      </StepContextProvider>
    </div>
  );
}

export default App;
