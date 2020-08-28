import styled from 'styled-components'

const HeaderStyle = styled.div`

@media (orientation: landscape) {
    font-size: 1.5vw;
}
@media (orientation: portrait) {
    font-size: 2vh;
}

a {
    text-decoration: none;
}
a:hover {
    padding-bottom: 0.1em;
    border-bottom: 0.1em solid
        ${props => props.theme.textColor};
}
.activePage {
    padding-bottom: 0.1em;
    border-bottom: 0.1em solid
        ${props => props.theme.textColor};
}

header {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em;
    width: 100%;
    margin: 0 auto;
    transition: ${props => props.theme.transition};
    background-color: ${props => props.theme.bgColor};
    box-shadow: ${props => (props.isScrolled ? ('0px 0px 1vh ' + props.theme.textColor) : 'none')};
}
`

export default HeaderStyle
