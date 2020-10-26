import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../templates/layout'
import SocialBar from '../components/socialBar'
import IntroStyle from '../styles/intro'
import AreasOfInterestStyle from '../styles/areasOfInterest'
import BlogPreview from '../components/blogPreview'

import DLSVG from '../assets/svgs/deeplearning.svg'
import SpeechSVG from '../assets/svgs/speech.svg'
import VisionSVG from '../assets/svgs/vision.svg'
import NLPSVG from '../assets/svgs/nlp.svg'
import AISVG from '../assets/svgs/ai.svg'
import DeploySVG from '../assets/svgs/deploy.svg'
import VisualizationSVG from '../assets/svgs/visualization.svg'
import SystemSVG from '../assets/svgs/system.svg'
import ParallelSVG from '../assets/svgs/parallel.svg'

class Intro extends React.Component {
    render() {
        return (
            <IntroStyle>
                <div id="introPage" className="intro">
                    <div className="headline">
                        <p>Hi! I'm <Link to="/about">Rahul</Link>,</p>
                        <p>An Enthusiastic</p>
                        <p>Data Scientist</p>
                        <p>&amp; Developer</p>
                    </div>
                    <SocialBar size="2x" />
                    <div className='scroller'>
                        <a href="#introContents">
                            {/* <img src={DownSVG} alt="down" />
                            <br/>
                            <img src={DownSVG} alt="down" /> */}
                            <div className="double_down_arrow" >&raquo;</div>
                        </a>
                    </div>
                </div>
            </IntroStyle>
        )
    }
}

const Area = ({icon, title, description}) => {
    return (
        <div className="area">
            <img src={icon} title={title} width="100em"/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

const AreasOfInterest = () => {
    return (
        <AreasOfInterestStyle>
            <div id="introContents" />
            <div className="heading">
                <h2>Areas of Interest</h2>
                <p><code>Things that I love working on.</code></p>
            </div>
            <div className="interests">
                <Area icon={DLSVG} title="Deep learning" description="Expertise in developing DL frameworks and libraries at various companies used for training, testing, and deployment." />
                <Area icon={SpeechSVG} title="Speech" description="Speech plays a key role in reaching the next billion users. Acoustic model and meta-models are improving the lives of millions of people." />
                <Area icon={NLPSVG} title="NLP" description="Understanding human languages can be tricky for computers. Semantic and phonetic embeddings are the link between text and numbers." />
                <Area icon={VisionSVG} title="Vision" description="Vision is the art of seeing invisible. Reasearch and development in Computer Vision is happing at tremendous rate." />
                <Area icon={AISVG} title="ML" description="Data is the new raw material for the businesses today. Click-prediction and recommendation are the backbone of this industry." />
                <Area icon={DeploySVG} title="Deploy" description="AI is useful only when it serves people efficiently. Infra should support deployment on both server and client (mobile) side." />
                <Area icon={VisualizationSVG} title="Visualization" description="Plots and visualization techniques can help in understanding what model is learning and how it is helping in achieving our goals." />
                <Area icon={SystemSVG} title="Systems" description="AI is not just about models. It is a cycle of collecting, storing, cleaning, transforming, annotating, learning, testing, debugging, and deploying." />
                <Area icon={ParallelSVG} title="Performance" description="Users want low latencies and providers want low cost. Knowledge of CPU (SIMD), and GPU (CUDA/OCL) can help achieve that." />
            </div>
        </AreasOfInterestStyle>
    )
}

export default function Home() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                limit: 1000
                filter: { fileAbsolutePath: { regex: "/content/articles/" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                nodes {
                    id
                    frontmatter {
                        title
                        description
                        tags
                        date
                        image {
                            id
                            publicURL
                        }
                    }
                    fields {
                        slug
                        postType
                    }
                }
            }
        }
    `)
    
    const seo = {
        title: 'Home',
    }

    return (
        <Layout seo={seo}>
            <Intro />
            <AreasOfInterest />
            <h2>Recent Articles</h2>
            <div className="blogList">
                {data.allMarkdownRemark.nodes.map(node => (
                    <BlogPreview key={node.id} data={node} showComments={false} />
                ))}
            </div>
        </Layout>
    )
}
