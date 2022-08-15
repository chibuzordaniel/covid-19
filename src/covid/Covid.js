import Footer from '../footer/Footer';
import CovidCss from './Covid.module.css';
import logo13 from '../covid/logo13.svg';
import logo14 from '../covid/logo14.svg';
import logo15 from '../covid/logo15.svg';
import logo16 from '../covid/logo16.svg';
import logo17 from '../covid/logo17.svg';
import logo18 from '../covid/logo18.svg';

function  Covid (){
  return(
    <div>
        <div className="container">
            <div id='PROTECTION' >
                <div className={CovidCss.covidprotectback} >
                    <div className={CovidCss.covidprotectflex1}>
                        <div className={CovidCss.logo13}>
                            <img src={logo13}></img>
                        </div>

                        <div>
                            <h1 className={CovidCss.covidprotect2}>How can I protect myself from <br></br> Covid-19?</h1>
                            <p  className={CovidCss.covidprotect3}>Coronavirus disease spreads primarily through contact with an infected <br></br> person when they cough or sneeze. It also spreads when a person touches a <br></br> surface or object that has the virus on it, then touches their eyes, nose, or <br></br> mouth.</p>
                            <h3 className={CovidCss.covidprotect4}>Whats should <span className={CovidCss.covidprotect5}>I do?</span> </h3>
                            
                            <div>
                                <div className={CovidCss.covidprotectborderflex}>
                                    <div className={CovidCss.covidprotectborder1}>
                                        <img src={logo14}  className={CovidCss.logo14}></img>
                                        <h3 className={CovidCss.covidwear1}>Wear a facemask</h3>
                                    </div>

                                    <div className={CovidCss.covidprotectborder1}>
                                        <img src={logo15}  className={CovidCss.logo14}></img>
                                        <h3 className={CovidCss.covidwear1}>Don’t touch your face</h3>
                                    </div>
                                    <div className={CovidCss.covidprotectborder1}>
                                        <img src={logo16}  className={CovidCss.logo14}></img>
                                        <h3 className={CovidCss.covidwear1}>Avoid hand contact</h3>
                                    </div>
                                </div>

                                <div className={CovidCss.covidprotectborderflex2}>
                                    <div className={CovidCss.covidprotectborder1}>
                                        <img src={logo17}  className={CovidCss.logo14}></img>
                                        <h3 className={CovidCss.covidwear1}>Keep safe distance</h3>
                                     </div>

                                     <div className={CovidCss.covidprotectborder1}>
                                        <img src={logo18}  className={CovidCss.logo14}></img>
                                        <h3 className={CovidCss.covidwear1}>Stay at home if you can</h3>
                                     </div>
                                </div>
                           </div>
                      </div>

                           
                        
                    </div>

                   
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Covid;