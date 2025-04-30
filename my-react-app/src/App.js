import logo from './logo.svg';
import './App.css';
import Blog from './components/blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Blog
        title="How to Build a Blog in React"
        author="John Doe"
        date="April 30, 2025"
        image="https://via.placeholder.com/800x400"
        content="This is a sample blog post. You can write rich content here including HTML, images, and more. Use state and props in React to make it dynamic!"
      />
    </div>
  );
}

export default App;
