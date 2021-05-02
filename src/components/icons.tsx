
import styled, { css } from 'styled-components';

export const SearchIcon = () => <svg viewBox="0 0 797 801" width="20" height="20" x="0px" y="0px">
    <path fill="white" stroke="white" stroke-width="40" className="st0" d="M763.6,743.8L508.9,490c22.5-24.3,40-51.9,52.5-82.6s19-64.1,19.6-100c-2.4-77.3-29.2-141.2-80.3-191.7
    S386.3,39,310.8,37.2c-79.7,1.8-145,28-195.8,78.5S37.9,230.1,36,307.4c2.4,77.3,29.2,141.2,80.3,191.7s114.4,76.7,189.9,78.5
    c34.1-0.6,65.7-6.4,94.9-17.3c29.2-11,56-26.5,80.3-46.6l253.8,254.7L763.6,743.8z M306.3,537.5c-65.1-1.8-119.3-24.3-162.5-67.6
    S78,372.6,76.2,307.4c1.8-65.1,24.3-119.4,67.6-163s97.4-66.2,162.5-68c65.1,1.8,119.4,24.5,163,68s66.2,97.8,68,163
    c-1.8,65.1-24.5,119.3-68,162.5S371.4,535.7,306.3,537.5z"></path>
</svg>;

// type IconType = {
//     open:boolean;
// }

export const Arrow = styled.i<{ open: boolean }>`
 display:inline-block;
 height:4px;
 position:relative; 
 transform:rotate(45deg);
 border:solid;
 border-width:0 2px 2px 0;
 padding:1px 3px;
 color:#fff;
 top:-3px;
 right:0;
 transition : all 0.2s;

 ${props => props.open && css`
    top:1px;
    transform:scaleY(-1) rotate(45deg);
    transition : all 0.3s;
 `};
`;