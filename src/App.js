import bannerImg from './Images/banner.jpg';
import './App.css';
import BannerImage from './Components/BannerImage';
import ContentArea from './Components/ContentArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BannerImage alt="banner image" bannerImage = {bannerImg}/>
        
        <div>
         <h1> Welcome to My photo Gallery!</h1>
         <h3>Sudha Subramaniam</h3>
         <ContentArea/>
        </div>
      </header>
    </div>
  );
}

export default App;
