import React, {useState, useEffect} from "react"
import Allcountry from "../layout/Allcountry"
import logo2 from "./logo2.svg"
import logo3 from "./logo3.svg"
import logo4 from "./logo4.svg"
import MainCss from "./Main.module.css"

function Page () {
const [isLoading, setIsLoading] = useState(false) 
const [value, setValue] = useState("");

const url ="https://api.covid19api.com/summary";

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        setValue(data?.Global)
        setIsLoading(false)
       
      
    }) 
    }, [])
    
   return (
    <div>
        <div  className={MainCss.logoflex}>
            <div  className={MainCss.logo2}>
              <img src={ logo2} alt="img"></img>
            </div> 
            <div>

                <div  className={MainCss.logo3}>
                  <img src={ logo3} alt="img"></img>
                </div>
              
                <div className={MainCss.logo4}>
                  <img src={ logo4} alt="img" ></img>
                </div>
            </div>
        </div>
         <div className="container">
          <div className={MainCss.covidDrop} >
            <div>
              <h1 className={MainCss.covid19}>COVID-19 Tracker</h1>  
            </div>

            <div className={MainCss.covidback2}>
               <div  className={MainCss.covidflexbox}>
                
                 <div> 
                     <div className={MainCss.covidflez3}>
                      <div className={MainCss.covidflexbox2}>
                          <h1 className={MainCss.covidactive}>Total Cases</h1>
                          <p className={MainCss.covidnumb1}>{isLoading ? "Loading ..." : value?.TotalConfirmed}</p>
                          <p className={MainCss.covidnumb2}>+23444</p>
                      </div>
                     </div>
                 </div>

                 <div>
                     <div className={MainCss.covidflez4}>
                      <div className={MainCss.covidflexbox3}>
                         <h1 className={MainCss.covidactive}>Active Cases</h1>
                          <p className={MainCss.covidnumb3}>{isLoading ? "Loading ..." : value?.NewConfirmed}</p>
                          <p className={MainCss.covidnumb4}>+23444</p>
                      </div>
                     </div>
                 </div>

                 <div>
                     <div className={MainCss.covidflez5}>
                      <div className={MainCss.covidflexbox4}>
                        <h1 className={MainCss.covidactive}>Recovered</h1>
                          <p className={MainCss.covidnumb5}>{isLoading ? "Loading ..." : value?.TotalRecovered}</p>
                          <p className={MainCss.covidnumb6}>+23444</p>
                      </div>
                     </div>
                 </div>

                 <div>
                     <div className={MainCss.covidflez6}>
                      <div className={MainCss.covidflexbox5}>
                         <h1 className={MainCss.covidactive}>Total Deaths</h1>
                          <p className={MainCss.covidnumb7}>{isLoading ? "Loading ..." : value?.TotalDeaths}</p>
                          <p className={MainCss.covidnumb8}>+23444</p>
                      </div>
                     </div>
                 </div>
               
              </div>  
           </div> 
          </div>
         </div>
          
    
     
    <Allcountry  />
    </div>
   )
}

export default Page;