import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';
import ContactUsModal from '../components/Contact/ContactUsModal';

interface IAboutPageProps {
  location: Location;
  data: GatsbyTypes.AboutPageTwoQueryQuery;
}

const HomePage: React.FC<IAboutPageProps> = ({ location, data }) => {
  const [visibleModal, setvisibleModal] = useState<boolean>(false);
  return (
    <Layout location={location}>
      <ContactUsModal visible={visibleModal} />
      <section className="text-gray-700 body-font">
        <div className="container flex flex-col items-center px-4 py-6 mx-auto sm:py-12 md:py-24 md:flex-row">
          <div className="flex flex-col items-center mb-12 text-center md:mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              Meet Drug Use with Compassion, Not Fear
            </h1>
            <p className="mb-8 leading-relaxed">
              Historically, we have met drug use with a militarized attitude of
              fear and aggression. It's time to change that to an attitude of
              compassion and a willingness to help.
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
      <section className="bg-blue-500">
        <div className="container flex flex-col items-center px-4 mx-auto my-12 sm:py-12 md:py-24 md:flex-row">
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <Img
              fluid={data.headerImage.childImageSharp.fluid}
              alt="Abstract image by Gradienta on Unsplash"
              className="object-cover object-center w-full h-full rounded shadow"
            />
          </div>
          <div className="flex flex-col items-center ml-12 text-center b-12 md:mb-16 lg:flex-grow md:w-1/2 md:items-start md:text-right">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              How Are We Bringing Compassion?
            </h1>
            <p className="mb-8 leading-relaxed">
              The <b>Massachussetts Compassionate Drug Policy Coalition </b>
              is working to bring decriminalization of the possession of
              personal amounts of drugs to the 2024 General Election Ballot.
              This harm reduction measure would allow drug users to safely do
              things such as carry used needles without fear of arrest. Around
              the world decriminalization has shown to decrease HIV infection
              rates, overdose death rates, and lowers non-drug related crime.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container flex flex-col items-center px-4 py-6 mx-auto sm:py-12 md:py-24 md:flex-row">
          <div className="flex flex-col items-center mb-12 text-center md:mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              What Is Harm Reduction?{' '}
            </h1>
            <p className="mb-8 leading-relaxed">
              Harm reduction is looking at substance use as a public health
              issue rather than a criminal one. Looking through a harm reduction
              lense can mean things as big needle exchanges and
              decriminalization on a systemic level to something as simple as a
              user deciding to start slow and build on their high.
              <br />
              <br />
              Harm reduction is <b>not</b> against abstinence of drugs. Harm
              reduction <b>includes</b> abstinence of drugs.
            </p>
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
      <section className="text-black-700 bg-primary">
        <div className="container flex flex-col items-center px-4 mx-auto my-12 sm:py-12 md:py-24 md:flex-row">
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <Img
              fluid={data.headerImage.childImageSharp.fluid}
              alt="Abstract image by Gradienta on Unsplash"
              className="object-cover object-center w-full h-full rounded shadow"
            />
          </div>
          <div className="flex flex-col items-center ml-12 text-center b-12 md:mb-16 lg:flex-grow md:w-1/2 md:items-start md:text-right">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              Want to help?
            </h1>
            <p className="mb-8 leading-relaxed text-left">
              Getting a measure on a ballot is no small task. There's a number
              of ways you can get involved. We are currently seeking:
              <br />
              <br />
              <ol>
                <li>
                  ◦ Help writing the bill. Whether you are a lawyer or no you
                  want in the bill is welcome
                </li>
                <br />
                <li>
                  ◦ Help promoting and educating Massachusetts on why we should
                  support decriminalization.
                </li>
                <br />
                <li>
                  ◦ We Can not receive donations at this time as we are
                  currently going for 501 status.
                </li>
                <li>
                  ◦ Any other ideas and input you may have? Feel free to reach
                  out.
                </li>
              </ol>
            </p>
            <div className="flex justify-center">
              {/* <button
              className="inline-flex px-6 py-2 text-lg text-white border-0 rounded bg-primary-700 focus:outline-none hover:bg-primary-600"
              type="button"
            >
              Donate
            </button> */}
              <button
                className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300"
                type="button"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageTwoQuery {
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
