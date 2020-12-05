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
      <section className="text-gray-700 body-font">
        <div className="m-6 w-5/12">
          <CarouselContainer data={data} />
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
