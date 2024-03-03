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
      <div style={{ height: "12px" }}>
        <h2 style={{ textAlign: 'center', color: 'red' }}>DEMO WEBAPP</h2>
      </div>
      <marquee scrollamount="10" scrolldelay="45"><h4 style={{ textAlign: 'center', color: 'red' }}>Latest updates: Server is in optimum condition</h4></marquee>
      <header style={{ backgroundColor: 'grey', textAlign: 'center' }} className="App-header">
        <h1>Welcome to DashBoard</h1>
      </header>
      <h3 style={{textAlign:"center"}}>ScatterPlots</h3><select style={{justifyContent:"space-between",display:"flex", alignItems: 'center'}}>
        <option>ScatterPlot</option>
        <option>Line plot</option>
        <option>Pie Chart</option>
      </select>
      <section style={{ backgroundColor: 'white', height: '100px', display: 'flex' }} className='scatterGraph'>
        <div>
        <iframe style={{background: "#F1F5F4", border: "none", bordeRadius: "2px", boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)", width: "100vw", height: "100vh"}}  src="https://charts.mongodb.com/charts-project-0-ppylt/embed/dashboards?id=65e2f66e-fb81-44cf-8d06-d253fb933ec7&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>
        </div>
      </section>
      <section style={{ backgroundColor: 'gray', height: '220px', marginTop:'350px' }} className='sec2'>
        <h1>Display some useful statistics</h1>
        <ol><h3>Here</h3></ol>
        <ol><h3>Here</h3></ol>
        <ol><h3>Here</h3></ol>
        <ol><h3>Here</h3></ol>
      </section>
      <h4>© Copyright 2024 by CodeCrunchers</h4>
    </div>
  );
}

export default App;
