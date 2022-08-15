import FooterCss from './Footer.module.css'
import logo21 from '../footer/logo21.svg'


function Footer () {
    return(
        <div>
            <div className={FooterCss.footerback}>
             <div className='container'>
               <div className={FooterCss.footerflex1}>
                    <div className={FooterCss.footerflex}>
                        <div className={FooterCss.footerheaderP} >
                            <h4 className={FooterCss.footerheader}>About</h4>
                            <p>API</p>
                            <p>Contact</p>
                            <p>About</p>
                        </div>

                        <div>
                            <div className={FooterCss.footerheaderP}>
                                <h4  className={FooterCss.footerheader}>Contact</h4>
                                <p>info@coronatracker.com </p>
                                <p>Instagram <img src={logo21} className={FooterCss.logo21} alt="img"></img> </p>
                                <p>Pinterest <img src={logo21} className={FooterCss.logo21} alt="img"></img></p>
                                <p>Twitter <img src={logo21} className={FooterCss.logo21} alt="img"></img></p>
                                <p>Pinterest<img src={logo21} className={FooterCss.logo21} alt="img"></img></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className={FooterCss.footerhead}>Join our newsletter</h4>
                        <h3 className={FooterCss.footeremail}>Your email <img src={logo21} className={FooterCss.logo22} alt="img"></img></h3>
                   </div>
              </div> 
                  <div className={FooterCss.footerendflex} >
                        <div>
                           <h5 className={FooterCss.footerendterm}>Terms & Conditions</h5>
                        </div>

                        <div>
                           <h5 className={FooterCss.footerendterm}>Privacy Policy</h5> 
                        </div>
                  </div>
             </div>
            </div>
        </div>
    )
}


export default Footer;