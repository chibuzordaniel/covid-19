import React, {useEffect, useState } from 'react';
import Corona from '../corona/Corona';
import AllCss from './Allcountry.module.css';
import logo9 from "./logo9.svg";
// import logo10 from "./logo10.svg";
import logo11 from "./logo11.svg"; 
import axios from '../axios';



function Allcountry () {

   const [covidSummary, setCovidSummary] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);
 
   console.log(covidSummary[currentIndex])

   useEffect(() => {

    
    axios.get(`/summary`)
    .then(res => {
        if(res.status === 200){
          setCovidSummary(res?.data?.Countries)
        }

        console.log(res);
    })
     .catch(error => {
        console.log(error)
     })
   }, []);

    // update date
    var showdate=new Date();
     var dt=showdate.toDateString();
     
    return(
        <div>
            <div className="container">
                
                <div className={AllCss.covidback1}>
   
                    <div>
                    
                       <h1 className={AllCss.covidTop} >Top Affected Countries</h1>
                       <h4  className={AllCss.covidupdate}>Last updated: {dt}</h4>
                        <div>
                            <h4 className={AllCss.coviditaly}>{covidSummary[currentIndex]?.Country}</h4>
                        </div>
                       <div className={AllCss.covidcountryflex}>

                        <div className={AllCss.covidborder}>
                            <h1 className={AllCss.covidcount}>Countries</h1>
    
                            <div className={AllCss.covidnumsscroll} >{ 
                                         covidSummary?.map((country, index) => 
                                         <p key={country.ID} onClick={() => setCurrentIndex(index )}>{country.Country}</p>)
                                    }
                            </div>

                        </div>
                      
                        <div className={AllCss.covidtotaltop}>
                            <div className={AllCss.covidtotal}>
                                <h3  className={AllCss.covidcovered}>Total Cases</h3>
                                <p className={AllCss.covidnumber1}>{covidSummary[currentIndex]?.TotalConfirmed}</p>
                            </div>

                            <div className={AllCss.covidtotal}>
                            <h3  className={AllCss.covidcovered}>Recovered</h3>
                                <p className={AllCss.covidnumber2}>{covidSummary[currentIndex]?.TotalRecovered}</p>
                            </div>

                           
                            <div className={AllCss.covidtotal}>
                               <h3  className={AllCss.covidcovered}>New Cases</h3>
                                <p className={AllCss.covidnumber3}>{covidSummary[currentIndex]?.NewConfirmed}</p>
                            </div>
                        </div>
                       

                       <div className={AllCss.covidtotaltop2}>
                           <div className={AllCss.covidtotal}>
                                <h3  className={AllCss.covidcovered}>New Recovered</h3>
                                <p  className={AllCss.covidnumber4}> {covidSummary[currentIndex]?.NewRecovered}</p>
                          </div>

                          <div className={AllCss.covidtotal}>
                                <h3  className={AllCss.covidcovered}>Total Deaths</h3>
                                <p className={AllCss.covidnumber5}>{covidSummary[currentIndex]?.TotalDeaths}</p>
                          </div>

                          <div className={AllCss.covidtotal}>
                                <h3  className={AllCss.covidcovered}>New Deaths</h3>
                                <p className={AllCss.covidnumber6}>{covidSummary[currentIndex]?.NewDeaths}</p>
                          </div>
                       </div>
                       
                        <div className={AllCss.covidmap}>
                            <img src={logo11} alt="img"></img>
                        </div>
                    </div>
                    </div>

                    <img src={logo9} className={AllCss.logo9} alt="img"></img>
                </div>
            </div>
            <div>
                <Corona />
            </div>
        </div>
    )
}

export default Allcountry;