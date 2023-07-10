import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error'
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Timer from './components/Timer';
import Footer from './components/Footer';
import { useQuiz } from './contexts/QuizContext';

function App() {

  const { status } = useQuiz();
  
  return (


    
    <div className="app">
    <Header />

    <Main>
     {status === 'loading' && <Loader /> }
     {status === 'error' && <Error />}
     {status === 'ready' && <StartScreen/>}
     {status === 'active' && 
     <>

     <Progress/>
     <Question/>
     <Footer>
       <Timer />
       <NextButton/>
     </Footer>
     
     </> 
     }
     {status === 'finished' && <FinishScreen/>}
    </Main>

    </div>

    
    
  );
}

export default App;
