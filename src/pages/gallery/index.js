import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../../templates/layout'
import GalleryStyle from './style'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const Gallery = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {absolutePath: {regex: "/content/gallery/"}}, sort: {fields: name, order: DESC}) {
                nodes {
                    name
                    absolutePath
                    publicURL
                    childImageSharp {
                        fluid (maxWidth:768, quality: 75) {
                            src
                        }
                        original {
                            width
                            height
                        }
                    }
                }
            }
        }
    `)

    const sortImagesIntoBuckets = (images, columns) => {
        var buckets = []
        for(var i = 0; i < columns; i++)
            buckets.push([])
        var heights = new Array(columns).fill(0.0)
        for (const image of images) {
            var minIdx = heights.indexOf(Math.min(...heights))
            buckets[minIdx].push(image)
            var adjHeight = image.childImageSharp.original.height / image.childImageSharp.original.width
            heights[minIdx] += adjHeight
        }
        return buckets
    }

    const getTitle = (name) => {
        return name.substring(name.indexOf('-') + 1).replace('-', ' ')
    }

    const columns = sortImagesIntoBuckets(data.allFile.nodes, 3)

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
        title: 'Art Gallery',
    }

    return (
        <Layout seo={seo}>
            <GalleryStyle>
                <h2 className="heading">
                    Art Gallery
                </h2>
                <SimpleReactLightbox>
                    <SRLWrapper options={options}>
                        <div className="row">
                            {columns.map((column) => (
                                <div className="column">
                                    {column.map((node, index) => (
                                        <div className="frame">
                                            <a href={node.publicURL} data-attribute="SRL">
                                                <img src={node.childImageSharp.fluid.src} alt={node.name} />
                                            </a>
                                            <span className="title">{getTitle(node.name)}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="single">
                            <div className="column">
                                {data.allFile.nodes.map((node, index) => (
                                    <div className="frame">
                                        <a href={node.publicURL} data-attribute="SRL">
                                            <img src={node.childImageSharp.fluid.src} alt={node.name} />
                                        </a>
                                        <span className="title">{getTitle(node.name)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
            </GalleryStyle>
        </Layout>
    )
}

export default Gallery
