import './App.css'

function App() {

  return (
    <>
    <form action="/process" method="post">
      <div className="form-group">
        <label style={{fontSize: "100px", color: "blue"}} htmlFor="email">Email</label>
        <input type="text" id="email" name="username" className="form-control" />
      </div>
      {2*2}
    </form>
    </>
  )
}

export default App
