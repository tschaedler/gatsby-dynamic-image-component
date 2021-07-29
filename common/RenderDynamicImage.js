import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

const Image = ({ filenameDesktop, filenameMobile, alt, style, className }) => (
	<StaticQuery
		query={graphql`
			query {
				imagesDesktop: allFile(
					filter: { relativeDirectory: { eq: "desktop" } }
				) {
					edges {
						node {
							relativePath
							childImageSharp {
								gatsbyImageData(
									layout: FULL_WIDTH
									quality: 95
									formats: [AUTO, WEBP, AVIF]
									placeholder: NONE
								)
							}
						}
					}
				}
				imagesMobile: allFile(
					filter: { relativeDirectory: { eq: "mobile" } }
				) {
					edges {
						node {
							relativePath
							childImageSharp {
								gatsbyImageData(
									layout: FULL_WIDTH
									quality: 95
									formats: [AUTO, WEBP, AVIF]
									transformOptions: { fit: COVER }
									placeholder: NONE
								)
							}
						}
					}
				}
			}
		`}
		render={(data) => {
			const imageDesktop = data.imagesDesktop.edges.find((n) => {
				return n.node.relativePath.includes(
					"desktop/" + filenameDesktop
				);
			});
			const imageMobile = data.imagesMobile.edges.find((n) => {
				return n.node.relativePath.includes("mobile/" + filenameMobile);
			});
			const sources = withArtDirection(
				getImage(imageDesktop.node.childImageSharp.gatsbyImageData),
				[
					{
						media: `(max-width: 992px)`,
						image: getImage(
							imageMobile.node.childImageSharp.gatsbyImageData
						),
					},
				]
			);
			return (
				<GatsbyImage
					image={sources}
					alt={alt}
					style={style}
					className={className}
				/>
			);
		}}
	/>
);

Image.defaultProps = {
	className: ``,
	style: ``,
};

export default Image;
