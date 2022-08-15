import Covid from '../covid/Covid';
import CoronaCss from './Corona.module.css'
import logo12 from  './logo12.svg'


function Corona(){
    return(
        <div id='SYMTOMS'>
            <div className="container">
               <div className={CoronaCss.covidcoronaflex}>
                 <div className={CoronaCss.covidsymptom}>
                    <h3 className={CoronaCss.covidvirus1}>Corona Virus Symptoms</h3>
                    <h1 className={CoronaCss.covidvirus2}>What are the symptoms?</h1>
                    <p className={CoronaCss.covidvirus3}>People may be sick with the virus for 1 to 14 days before developing symptoms. The most common <br></br> symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Less common <br></br> symptoms are aches and pains, sore throat, diarrhoea, conjuctivitis, headache, loss of taste or smell, a <br></br> rash on skin or discolouration of fingers or toes. Serious symptoms are difficulty in brething or shortness <br></br> of breath, ches pain or pressure, loss of speech movement. Most people (about 80%) recover from the <br></br> disease without needing special treatment. More rarely, the disease can be serious and even fatal. Older <br></br> people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be <br></br> more vulnerable to becoming severely ill.</p>
                 </div>

                  <div className={CoronaCss.logo12}>
                       <img src={logo12}></img>
                  </div>
               </div>
            </div>

            <div>
                <Covid />
            </div>
        </div>
    )
}

export default Corona;