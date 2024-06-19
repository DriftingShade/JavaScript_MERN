import './App.css'
import ClickComponent from './components/ClickComponent'
import ChangeComponent from './components/ChangeComponent'
import SubmitComponent from './components/SubmitComponent'

function App() {

  return (
    <>
      <ClickComponent clickProp="I've been clicked!" />

      <ChangeComponent />

      <SubmitComponent submitProp="Thanks for the submission!"/>
    </>
  )
}

export default App
