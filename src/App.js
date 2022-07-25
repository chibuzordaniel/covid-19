import Main from  './pages/Main'
import logo1 from './svg/logo1.svg'

function App(){
  
  var showdate=new Date();
  var dt=showdate.toDateString();
  return(
    <div>
      <div className="covid-navbar-back">
        <div className="container">
          <div className='covid-flex'>
          <div className='covid-flex1'>
            <div className='covid-flex2'>
              <img src={logo1}></img>
              <h1 className='Cov19Strain'>Cov19Strain</h1>
            </div>
            <div className='covid-flex5' >
              <div className='covid-flex3'>
                <ul className='covid-flex4'>
                  <li className='covid-home'>HOME</li>
                  <li>SYMPTOMS</li>
                  <li>PROTECTION</li>
                  
                </ul>
                
              </div>
              
            </div>
          
          </div>
          <div className='covid-btn1'>
          <p>Updated: <span>{dt}</span></p>
          </div>
        
          </div>
          
        </div>
      </div>
      <Main/>
    </div>
  )
}

export default App;