import React, { useState } from 'react';
import { Link } from '../Link';
import { useSocialQuery } from '../../hooks';

interface Props {
  visible: boolean;
}

const ContactUsModal: React.FC<Props> = () => {
  const { twitter, facebook, instagram } = useSocialQuery();
  const [formData, setformData] = useState({
    title: '',
    organization: '',
    email: '',
    message: '',
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    setformData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  return (
    <div className="container flex p-8 bg-green-200 border-4 border-green-700 rounded-md bg-transparent">
      <div>
        <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
          Contact Us
        </h1>
      </div>
      <div>
        <form>
          <input
            id="title"
            name="title"
            placeholder=" Name"
            className="inline-flex m-4 rounded-md"
            onChange={handleInputChange}
            value={formData.title}
            required
          />
          <br />
          <input
            id="organization"
            name="organization"
            placeholder=" Organization"
            className="inline-flex m-4 rounded-md"
            onChange={handleInputChange}
            value={formData.organization}
          />
          <br />
          <input
            id="email"
            name="email"
            placeholder=" Email"
            className="inline-flex m-4 rounded-md"
            required
          />
          <br />
          <input
            id="message"
            name="message"
            type="text field"
            placeholder=" Message"
            className="m-4 rounded-md"
            onChange={handleInputChange}
            value={formData.message}
            required
          />
          <br />
          <button
            type="submit"
            className="inline-flex px-6 py-2 text-lg text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <Link
            className="text-gray-500"
            to={`https://facebook.com/${facebook.username}`}
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </Link>
          <Link
            className="ml-3 text-gray-500"
            to={`https://twitter.com/${twitter.username}`}
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </Link>
          <Link
            className="ml-3 text-gray-500"
            to={`https://instagram.com/${instagram.username}`}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ContactUsModal;
