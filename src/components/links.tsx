import React, { useState } from 'react';
import { Arrow } from './icons';

interface LinkProps {
    linkText: string,
    linkHref: string,
    iconState: boolean,
    enableIcon: boolean

}
interface LinkButtonProps {
    buttonText: string,
    icon: JSX.Element,
}

const Link: React.FC<LinkProps> = ({ linkText, linkHref, iconState, enableIcon }) => {
    const [iconLinkState, seticonLinkState] = useState(iconState)
    return (
        <a
            href={linkHref}
            onClick={() => seticonLinkState(!iconLinkState)}
        > {linkText} &nbsp;
            {
                enableIcon &&
                <Arrow
                    open={iconLinkState}
                />
            }
        </a>
    )
}

export const LinkButton: React.FC<LinkButtonProps> = ({ buttonText, icon }) => {
    return <button>{buttonText} {icon} </button>
}

export default Link
