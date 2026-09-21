
import './App.css'
import { initialTweets } from './data/tweets';
import { TweetsList } from './components/TweetsList';

function App() {
  

  return (
     

    
    <TweetsList tweets={initialTweets} />
     

  );
 
}
export default App

