import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {matrix} from '../utils/fallingMatrix'

const PageNotFoundStyle = styled.div`
    a {
        text-decoration: none;
        font-size: 10vw;
        color: #BBFFBB;
        text-shadow: 0 0 1em ${props => props.theme.textColor};
    }
    .fnf{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 50vh;
        border: none;
        outline: none;    
    }
    .home{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50vh;
        left: 0;
        width: 100vw;
        height: 50vh;
        border: none;
        outline: none;    
    }
`

class PageNotFound extends React.Component {

    componentDidMount() {
        matrix()
    }

    render() {
        return (
            <PageNotFoundStyle>
                <canvas id="background" width="512" height="360"></canvas>
                <div className='home'>
                    <Link to="/">Back to Home</Link>
                </div>
                <div className='fnf'>
                    <Link to="/">Link Not Found</Link>
                </div>
            </PageNotFoundStyle>
        )
    }
}

export default PageNotFound
