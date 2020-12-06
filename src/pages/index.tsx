import { graphql } from 'gatsby';
import React from 'react';

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
      <section className="text-gray-700 body-font items-center ">
        <div className="container flex flex-col items-center px-4 py-6 mx-auto sm:py-12 md:py-24 md:flex-row">
          <div className="flex flex-col mb-12 text-center md:mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="m-4 text-2xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              Creating Space for A Catchy Tagline
            </h1>
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
