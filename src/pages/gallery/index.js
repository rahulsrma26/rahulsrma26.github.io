import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../../templates/layout'
import GalleryStyle from './style'
// import  from "simple-react-lightbox";
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const Gallery = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {absolutePath: {regex: "/content/gallery/"}}) {
                nodes {
                    name
                    absolutePath
                    publicURL
                    childImageSharp {
                        fluid (maxWidth:768, quality: 75) {
                            src
                        }
                    }
                }
            }
        }
    `)

    const images = data.allFile.nodes;
    
    const columns = [
        images.slice(0, images.length / 3),
        images.slice(images.length / 3, 2 * images.length / 3),
        images.slice(2 * images.length / 3),
    ]
    console.log(columns)

    const options = {
        settings: {
            overlayColor: 'rgba(0, 0, 0, 0.9)',
            autoplaySpeed: 0,
            hideControlsAfter: false,
            disablePanzoom: true,
        },
        buttons: {
            showDownloadButton: false,
        },
        caption: {
            showCaption: false,
        },
        thumbnails: {
            showThumbnails: false,
        },
    }

    const seo = {
        title: 'Gallery',
    }

    return (
        <Layout seo={seo}>
            <GalleryStyle>
                <SimpleReactLightbox>
                    <SRLWrapper options={options}>
                        <div className="row">
                        { columns.map( (column) => (
                            <div className="column">
                                {column.map((node, index) => (
                                    <a href={node.publicURL} data-attribute="SRL">
                                        <img src={node.childImageSharp.fluid.src} alt={node.name} />
                                    </a>
                                ))}
                            </div>
                        ))}
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
            </GalleryStyle>
        </Layout>
    )
}

export default Gallery
