import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';

interface IAboutPageProps {
  location: Location;
  data: GatsbyTypes.AboutQueryQuery;
}

const AboutPage: React.FC<IAboutPageProps> = ({ location, data }) => (
  <Layout location={location} title="About">
    <section className="text-gray-700 body-font">
      <div className="container flex flex-col px-4 py-12 mx-auto md:py-24">
        <div className="mx-auto lg:w-4/6">
          <div className="h-64 overflow-hidden rounded-lg shadow">
            <Img
              fluid={data.headerImage.childImageSharp.fluid}
              alt="Abstract image by Sean W. Sinclair"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex flex-col mt-10 sm:flex-row">
            <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 text-gray-400 bg-gray-200 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="mt-4 text-lg font-medium text-gray-900 title-font">
                  Massachusetts Compassionate Drug Policy Coalition
                </h2>
                <div className="w-12 h-1 mt-2 mb-4 rounded bg-primary-500" />
                <p className="text-base text-gray-600">
                  Working to bring drug decriminalization to Massachusetts
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 text-center border-t border-gray-300 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
              <p className="mb-0 text-lg leading-relaxed">
                Rainbow cyan fuchsia, silver navy blue plum dark aqua. Purple
                white orange swatch, olive gray blue, neon crimson silver
                charcoal hot pink grey mint saturation. Plum hue purple coral,
                yellow rainbow pastel, black grey teal saturation orange lime
                light fuchsia. Rainbow teal, dark hue bright aquamarine. Light
                teal persimmon, magenta rainbow, navy blue olive red saturation
                fuchsia. Orange olive red, magenta wheat, purple khaki
                aquamarine teal persimmon hot pink charcoal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query AboutQuery {
    headerImage: file(
      relativePath: { eq: "placeholder-images/unsplash-seanwsinclair.jpeg" }
    ) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default AboutPage;
