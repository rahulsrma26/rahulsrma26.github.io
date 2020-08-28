import styled from 'styled-components'

const SocialBarStyle = styled.div`
    width: 100%;
    // max-width: calc(2em * 6 * 1.5);
    
    ul {
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style-type: none;
        padding: 0px;

        li {
            margin: 0;
            list-style-type: none;
        }
        li:hover {
            transform: translateY(-0.5em);
        }
    }
`

export default SocialBarStyle
