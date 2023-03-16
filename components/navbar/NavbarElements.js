import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #ffb3ff;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
	font-family: 'Hanken Grotesk', 'Roboto';
	font-weight: 300;	
	font-size: 0.8rem;
    color: var(--primary-color);
    text-decoration: none;
    vertical-align: middle;
	text-decoration: none;
	cursor: pointer;
	letter-spacing: 0.1rem;
	&.active {
		color: var(--text-color);
	}
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
