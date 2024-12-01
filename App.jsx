import "./App.css";

function App() {
  return (
    <>
      <div className="parent">
{/*         when remove sidebar for test mobile view main and header use 1fr to fill space of side bar */}
        <div className="sidebar">sidebar</div>
        <div className="header">header</div>
        <div className="main">main</div>
      </div>
    </>
  );
}

export default App;
