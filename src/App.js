import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Preview from './components/Preview';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Input />
        <Preview />
      </main>
    </div>
  );
}

export default App;
