import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './Custom.css'
import profilePic from'./image/WhatsApp Image 2020-09-19 at 12.25.10 (1).jpeg'
import profilePic2 from './image/WhatsApp Image 2020-09-19 at 12.25.10.jpeg'

function App() {
  return (
      <div className="App">
      <header className="App-header">

      <div className="header-first-header">
          <h3 style={{marginRight:'30px'}}>Merhaba, ben </h3>
          <h1 style={{color:'yellow'}}>Hüseyin Sağlam</h1>
      </div>
       <div className="header-pic">
         <img src={profilePic} className="App-logo" alt="logo" />
         <img src={profilePic2} className="App-logo" alt="logo" />
       </div >
          <div className="header-main-paragraph">

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus libero, volutpat eget diam sit amet,
              sollicitudin porta turpis. Donec scelerisque hendrerit varius. Phasellus consectetur tincidunt tellus eget
              gravida. Donec non pulvinar lorem. Quisque aliquet feugiat ipsum. Aliquam consectetur, ex quis lobortis
              hendrerit, metus velit tristique erat, at fringilla enim orci at massa. Donec posuere sodales urna.
              Phasellus tincidunt lorem tincidunt semper rhoncus. Donec fermentum augue sit amet turpis tempor vehicula.
              Maecenas sed pretium sapien. Vestibulum vitae euismod massa, vitae finibus mi.
          </p>
          <p>
              In ut arcu viverra, lobortis felis a, fermentum arcu. Pellentesque imperdiet elit lacus, a auctor ex
              dapibus eget. Donec vehicula arcu ut enim luctus lacinia. Suspendisse at ipsum a elit venenatis ornare
              eget non lorem. Vestibulum sodales rutrum elit vulputate dignissim. Nunc consectetur dictum nisi, id
              iaculis dui tincidunt eget. Phasellus ultrices viverra ligula id rhoncus. Curabitur sit amet nisi dolor.
              Donec faucibus viverra sem sed euismod. Aliquam porta a dui non efficitur. Cras nisi dolor, congue
              elementum malesuada eget, pellentesque ut tortor. Praesent sit amet quam ac sem molestie auctor. Etiam ut
              lectus eu mi volutpat semper ac ac felis.
          </p>
          <p>
              Nam ullamcorper eu urna a egestas. Vivamus sed dictum felis, eleifend laoreet massa. Vivamus non convallis
              lorem, ac elementum mauris. Aenean luctus mi arcu, non elementum tortor cursus vitae. Maecenas non risus
              eget eros vehicula pharetra. Nunc sit amet ultrices enim, ut consectetur arcu. Proin facilisis pulvinar
              enim quis viverra. Phasellus ante lacus, egestas id velit id, sollicitudin posuere ipsum. Fusce at dictum
              felis. Vivamus blandit lacus sapien, id volutpat dui rhoncus et. Integer ac efficitur dolor. Maecenas
              mattis tristique quam. Vestibulum molestie eu mauris eget commodo..
          </p> </div>

          <div style={{display:"flex"}}>
             <div style={{marginRight:'30px'}}>
                 <p className="header-font-size-large header-color-white">Tu velim mihi page? </p>
             </div>

              <div style={{alignSelf:"center"}}>
                  <div className="radio">
                      <label>
                          <input type="radio" value="EVET"  />
                          ETIAM
                      </label>
                  </div>
                  <div className="radio">
                      <label>
                          <input type="radio" value="HAYIR" />
                          NON
                      </label>
                  </div>
              </div>

          </div>

      <blockquote cite="http://www.worldwildlife.org/who/index.html">
          For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
      </blockquote>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
