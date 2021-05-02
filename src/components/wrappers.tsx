import styled from 'styled-components';

export const AppWrapper = styled.div`
  height:100vh;
  background-color: ${props => props.theme.colors.secondary};
  color: #ffffff;
  position:relative;
  /* box-sizing: content-box;    */
`;

export const NavWrapper = styled.nav`
    background-color: ${props => props.theme.colors.primary};
    padding: 0 ${props=>props.theme.spacing['4s']};
   
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height:90px;
    width:100%;
    letter-spacing:-0.5px;
    font-size: 15px;
    font-family: 'ps commons',sans-serif;
    position:fixed;
    top: 0;
    left:0;

 `;
export const LogoWrapper = styled.div`
    display:flex;
    width: 12%;
`;

export const Logo = styled.img`
  max-height: 40px;
  padding: 5px;
  width: 180px;
`;

export const AllLinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    
`;
export const LinksWrapper = styled.ul`
    margin:0 30px 0 0!important;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
  
    
    li{
        a{
            height:100%;
            text-decoration: none;
            color: ${props => props.theme.colors.text.primary};
            padding: 33px 18px;
            font-weight: bold;
            margin:0;
        }
    }
`;


// To be Replaced with Styled component with props inputs
export const MainLinks = ({ children }: any) => <LinksWrapper>{children}</LinksWrapper>;
export const UtilLinks = ({ children }: any) => <LinksWrapper>{children}</LinksWrapper>;

export const HeaderWrapper = styled.header`
    background-image: url("/img/header-hero.jpg");
    width:100%;
    height: 300px;
    background-size: cover;
    background-position: top center;
    div{
        /* padding: 45px 0; */
        margin: 0 auto;    
        max-width:1200px;
        text-align: center;
        div{
            padding: 0 10px 0px 10px;
            h6{
                margin:0 0 20px 0;
                font-size: 15px;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: ${props=>props.theme.colors.text.main}
        }
        }
        div{
            h1{
                margin:0;
                padding:0;
                font-size: 56px;
                font-family: 'PS Commons Bold',sans-serif;
                font-weight: bold !important;
            }
        }
    }
`;
export const HomeHeaderWrapper = styled.header`
    background-image: url("/img/header-hero-home.jpg");
    width:100%;
    height: 514px;
    background-size: cover;
    background-position: top center;

    div{
        /* padding: 45px 0; */
        margin: 0 auto;    
        max-width:1200px;
        text-align: center;
        div{
            padding: 0 10px 0px 10px;
            h6{
                margin:0 0 20px 0;
                font-size: 15px;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: ${props=>props.theme.colors.text.main}
        }
        }
        div{
            h1{
                margin:0;
                padding:0;
                font-size: 56px;
                font-family: 'PS Commons Bold',sans-serif;
                font-weight: bold !important;
            }
        }
    }
`;
export const Spacer = styled.div<{height?:string|number}>`
    height:${props=>props.height?props.height:"80px"};
    width:100%;
`;

export const ContainerWrapper = styled.div`
    padding: 0 ${props=>props.theme.spacing['4s']} ;
`;

export const Section = styled.div`
    
`;