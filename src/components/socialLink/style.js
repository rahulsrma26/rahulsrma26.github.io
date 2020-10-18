import styled from 'styled-components'

const SocialLinkStyle = styled.div`
    svg{
        color: ${props => props.theme.textAccent};
        filter: drop-shadow(0 0 0.1em ${props => props.theme.linkShadow});
    }
`

export default SocialLinkStyle
