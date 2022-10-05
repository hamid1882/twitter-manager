import Loginpage from "./components/Loginpage/Loginpage";
import Homepage from "./components/Homepage/Homepage";

function App() {
  const queryParam = window.location.search.substring(1).split("=")[1]
  console.log(queryParam)
  return (
    <div>
      {
        queryParam === undefined || queryParam === "false"
          ? <Loginpage />
          : <Homepage />
      }
    </div>
  );
}

export default App;
