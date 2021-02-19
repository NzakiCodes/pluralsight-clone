import {
    NavWrapper,
    LogoWrapper,
    Logo,
    AllLinksWrapper,
    MainLinks
} from './wrappers';
import { Arrow, SearchIcon } from './icons';


const Navbar = () => (

    <NavWrapper>
        <LogoWrapper>
            <Logo src="/img/PS_logo.png" alt="Logo" />
        </LogoWrapper>
        <AllLinksWrapper>
            <MainLinks>
                <li>
                    <a href="/">Why Pluralsight? <Arrow open={false} /> </a>
                </li>
                <li>
                    <a href="/">Products <Arrow open={false} /> </a>
                </li>
                <li>
                    <a href="/">Resources <Arrow open={false} /> </a>
                </li>
                <li>
                    <a href="/">For Individuals </a>
                </li>
            </MainLinks>
            <MainLinks>
                <li>
                    <a href="/#">
                        <SearchIcon />
                    </a>
                </li>
                <li>
                    <a href="/#">Sign in <Arrow open={false} />  </a>
                </li>
            </MainLinks>
        </AllLinksWrapper>
    </NavWrapper>

);

export default Navbar