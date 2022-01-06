import * as React from "react"
import logo from "../assets/images/logo.png"
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const FooterWrapper = styled.div`
.logoPi{
    display: flex;
    max-width: 100%;
    width: 15%;
    margin-top: 2%
}
.foot{
    background-color:#c92830;
}
.firstbloc{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center
}
p{
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-family: "montserratlight",Helvetica,Arial,sans-serif;
    line-height: 1.8;
}
h3{
    color: #fff;
    text-align: center;
    font-family: "montserratregular","Times New Roman",Times,serif;
    font-weight: bold;
    line-height: 1.1;
    font-size: 17px;

}
a{
    color: #fff;
}
.contact{
    line-height: 10px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.SocialMedia{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
}
.adresse{
    color: #fff;
    text-align: center;
    font-family: "montserratlight",Helvetica,Arial,sans-serif;
    line-height: 1.5;
    margin-top: 30px;
    font-size: 17px;
}
`;

function Footer() {
  return (
    <FooterWrapper>
    <div className="foot">
      <div className="firstbloc">
        <img src={logo} alt="" className="logoPi" width="100%" />
        <p classname="adresse">
          Ecole Polytechnique Internationale Privée de<br/> Tunis <br/>
          Rue du Lac d'Annecy.<br/>
          Les Berges du Lac 1053, <br/>
          Tunis, Tunisie{" "}
        </p>
        <h3> Contactez-nous </h3>
        <div className="contact">
         <p>
        (+216)-70 026 426 <br/> 
        (+216)-29 310 031<br/>
        contact@pi.tn
        </p>
        </div>
        <div className="SocialMedia">
            <a href="https://www.linkedin.com/company/polytechnique-internationale/">
                <LinkedInIcon/>
            </a>
            <a  href="https://www.instagram.com/polytechinternationale/">
                <InstagramIcon/>
            </a>
            <a href="https://www.facebook.com/polytechinternationale">
                <FacebookIcon/>
            </a>
        </div>
        <div className="footerContainer">
          <h1></h1>
        </div>
      </div>
    </div>
    </FooterWrapper>
  )
}

export default Footer
