import './App.css';
//import topOfPage from './components/header';

function App() {
  return (
    <>
    <div id='cursor'>
    <div className='header'>
    <header>Crooked Little Shack </header>
    <header id='co'>Collective</header>
    </div>
    <div id='img1'></div>
    </div>
    <div className='sec1'>
    <header id='about'>About Us.</header>
    <div className='info1'>
    <sec>Art is creative expression, emotion, movement, embracement, everything from the splattered paint on the  sidewalk to the famed pice in the museum. </sec> 
    <sec>Founded amoungst sunsoaked hills and a small babbling creek by a family of artist, this collective was built to house saftey, honesty, cerativity, and most importantly community.</sec>
    </div>
    <div id='photos1'>
      <img id='threep' src='https://i.imgur.com/TgxiaIL.jpg' alt='3photos by Jess'/> 
      {/* <img src='https://i.imgur.com/4BYObvw.png' alt='flowers by Midori'/>
      <img src='https://i.imgur.com/lnEir8S.png' alt='2paintings by Jess'/> */}
      <sec id='section'> Here are some more worrdstrying to see how this can be organizd without giving me a migrane Founded amoungst sunsoaked hills and a small babbling creek by a family of artist, this collective was built to house saftey, honesty, cerativity, and most importantly community. 
      Here are some more worrdstrying to see how this can be organizd without giving me a migrane Founded amoungst sunsoaked hills and a small babbling creek by a family of artist, this collective was built to house saftey, honesty, cerativity, and most importantly community.  
      </sec>
      <img id='coffee' src='https://i.imgur.com/mNz9IGF.png' alt='coffee by Midori'/>
    </div>
    <div id='about1'>events</div>
      <div id='cards'>
      <div id="eventcard"></div>
      <div  id="eventcard"></div>
      <div  id="eventcard"></div>
      <div  id="eventcard"></div>
      </div>
    <div id='about'>current artists</div>
    <div id='about'>connect with us</div>
    </div>
    </>
  );
}

// needed : an about section for each artist, event page and get in touch seciton. 

export default App;
