import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';

interface IHomepageProps {
  location: Location;
  data: GatsbyTypes.HomepageQueryQuery;
}

const HomePage: React.FC<IHomepageProps> = ({ location, data }) => {
  const [visibleModal, setvisibleModal] = useState<boolean>(false);
  return (
    <Layout location={location}>
      <section className="text-gray-700 body-font">Lesbian Punk Design</section>
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
  }
`;

export default HomePage;
