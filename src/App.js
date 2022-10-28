
import './App.css';
import { Routes, Route, Router} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Home from './Pages/Home';
import Content from './Pages/Content';
import Users from './Components/Users';
import Not from './Pages/Not';
import About from './Components/About';
import Name from './Components/Name';
import ErrorBoundary from './Components/ErrorBoundary';



function App() {
  return (
    <div className="App">
        <ErrorBoundary>
        <Name heroName="tayo"/>
        <Name heroName="demon"/>
        <Name heroName="joker"/>
        </ErrorBoundary>
        

        <nav>
          <Link to="/">Home</Link>
          <Link to="Content">Content</Link>
          <Link to="Users">users</Link>
          
        </nav>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />}>
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Not />} />
        </Routes>

       
    </div>
  );
}

export default App;
