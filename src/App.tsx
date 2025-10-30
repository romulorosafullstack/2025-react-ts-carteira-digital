import Dashboard from "./pages/Dashboard"
import List from "./pages/List"
import Signin from "./pages/Signin"
import GlobalStyles from "./styles/GlobalStyles"

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Dashboard />
      <List />
      <Signin />
    </>
  )
}

export default App
