import LoginPage from "./login";

function App() {
  const DialogFunction = (event) => {
    event.preventDefault();
    alert("This function is blocked");
  };
  return (
    <div className="App">
      <nav style={{ backgroundColor: 'blue', color: 'white', height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h4 style={{ textAlign: "start", marginLeft: "25px", color: "white" }}>BETA Access</h4>
        </div>
        <div>
          <button style={{ marginRight: '10px' }} onClick={DialogFunction}>Register Admin</button>
          <button style={{ marginRight: '10px' }} onClick={DialogFunction}>Login Admin</button>
        </div>
      </nav>
      <div style={{height: "12px"}}>
      <h2 style={{ textAlign: 'center', color: 'red' }}>DEMO WEBAPP</h2>
      </div>
      <marquee scrollamount= "10" scrolldelay= "45"><h4 style={{ textAlign: 'center', color: 'red' }}>Latest updates: Server is in optimum condition</h4></marquee>
      <header style={{ backgroundColor: 'grey', textAlign: 'center' }} className="App-header">
        <h1>Welcome to DashBoard</h1>
      </header>
      <section style={{ backgroundColor: 'lightgray', height: '100px', display: 'flex' }} className='sec1'>
        <table border='3'>
          <tr>Show graphs here</tr>
        </table>
        <table border='3'>
          <tr style={{ marginLeft: '20px' }}>Show graphs here</tr>
        </table>
        <table border='3'>
          <tr style={{ marginLeft: '20px' }}>Show graphs here</tr>
        </table>
        <table border='3'>
          <tr style={{ marginLeft: '20px' }}>Show graphs here</tr>
        </table>
        <h3>We will need the model's outputs for the graphs and stats</h3>
      </section>
      <section style={{ backgroundColor: 'gray', height: '220px' }} className='sec2'>
        <h1>Display some useful statistics</h1>
        <ol><h3>Here</h3></ol>
        <ol><h3>Here</h3></ol>
        <ol><h3>Here</h3></ol>
        <ol><h3>Here</h3></ol>
      </section>
      <section style={{ backgroundColor: 'lightgray', height: '80px', display: 'flex' }} className='sec1'>
        <h3>Got more ideas? <code>Implement here</code></h3>
      </section>
      <h4>© Copyright 2024 by CodeCrunchers</h4>
    </div>
  );
}

export default App;
