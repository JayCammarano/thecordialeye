import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

import { Layout } from '../components/Layout';
import { CarouselContainer } from '../components/Carousel';

interface IHomepageProps {
  location: Location;
  data: GatsbyTypes.HomepageQueryQuery;
}

const HomePage: React.FC<IHomepageProps> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <section className="text-gray-700 body-font items-center mx-auto ">
        <div className="container flex flex-col items-center px-4 py-6 mx-auto sm:py-12 md:py-24 md:flex-row">
          <div className="flex flex-col mb-12 text-center md:mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="m-4 text-2xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              Creating Space for A Catchy Tagline
            </h1>
            <CarouselContainer data={data} />
            <p className="ml-4 mb-8 w-1/2 leading-relaxed">
              The Cordial Eye Gallery and Artist Space is an alternative space
              that utilizes the arts as a meeting point for community building.
              We are creating space for thoughtful, provocative,
              multidisciplinary contemporary art. We are an inclusive,
              financially accessible space for artists on Cape Cod and beyond.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container flex flex-col items-center px-4 py-6 mx-auto sm:py-12 md:py-24 md:flex-row">
          <div className="flex flex-col items-center mb-12 text-center md:mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              Creating Space For A Second Area
            </h1>
            <p className="mb-8 leading-relaxed">
              The Cordial Eye Gallery and Artist Space is an alternative space
              that utilizes the arts as a meeting point for community building.
              We are creating space for thoughtful, provocative,
              multidisciplinary contemporary art. We are an inclusive,
              financially accessible space for artists on Cape Cod and beyond.{' '}
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex px-6 py-2 text-lg text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-600"
                type="button"
              >
                Learn More
              </button>
              <button
                className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300"
                type="button"
              >
                Get Involved
              </button>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <Img
              fluid={data.headerImage.childImageSharp.fluid}
              alt="Abstract image by Gradienta on Unsplash"
              className="object-cover object-center w-full h-full rounded shadow"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        buildContext
        version
      }
    }
    siteBuildMetadata {
      buildTime
    }
    headerImage: file(
      relativePath: { eq: "placeholder-images/unsplash-gradienta.jpeg" }
    ) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    airtable(
      table: { eq: "Images" }
      data: { Name: { eq: "index-carousel" } }
    ) {
      data {
        Attachments {
          url
        }
      }
    }
  }
`;

export default HomePage;
