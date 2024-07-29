import './App.css';
import Button from "./button.js"

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo-div">
          <a href="">OnePage</a>
        </div>
        <nav>
        <ul className="menu-list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <Button/>
      </header>
      <section className="cont">
        <div className="box">
          <h1>One Page Bootstrap</h1>
          <h1>Website Template</h1>
          <p>We are team of talanted designers</p>
          <Button/>
        </div>
      </section>
    </div>
  );
}

export default App;
