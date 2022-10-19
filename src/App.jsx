import Balance from "./components/Balance";
import Spendings from "./components/Spendings";
import './dist/css/app.css'

function App() {
  return (
    <>
      <div className="container">
        <Balance />
        <Spendings />
      </div>
    </>
  )
}

export default App;
