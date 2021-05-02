import { useState } from 'react';
import {
    NavWrapper,
    LogoWrapper,
    Logo,
    AllLinksWrapper,
    MainLinks
} from './wrappers';
import { Arrow, SearchIcon } from './icons';
import Link from './links';


const Navbar = () => {
    const navLinkState: boolean = false;
    return (

        <NavWrapper>
            <LogoWrapper>
                <Logo src="/img/PS_logo.png" alt="Logo" />
            </LogoWrapper>
            <AllLinksWrapper>
                <MainLinks>
                    <li>
                        <Link
                            linkHref="#"
                            linkText="Platform"
                            iconState={navLinkState}
                            enableIcon={true}
                        />
                    </li>
                    <li>
                        <Link
                            linkHref="#"
                            linkText="Products"
                            iconState={navLinkState}
                            enableIcon={true}
                        />
                    </li>
                    <li>
                        <Link
                            linkHref="#"
                            linkText="Resources"
                            iconState={navLinkState}
                            enableIcon={true}
                        />
                    </li>
                    <li>
                        <Link
                            linkHref="#"
                            linkText="For Individuals"
                            iconState={navLinkState}
                            enableIcon={false}
                        />
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
                        <Link
                            linkHref="#"
                            linkText="Sign in"
                            iconState={navLinkState}
                            enableIcon={true}
                        />
                    </li>
                </MainLinks>
            </AllLinksWrapper>
        </NavWrapper>

    )
};

export default Navbar