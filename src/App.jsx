import HeroPage from './components/heroSection';
import CategoryHighlightPage from './components/categories';
import './styling/main.css';

function App() {


  return (
    <>
      <div className="main-container">
        <HeroPage />
        <CategoryHighlightPage />
      </div>
    </>
  )
}

export default App
