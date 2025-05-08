'use client';
import Link from 'next/link';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Arduino Mastery Workshop</h3>
            <p className="text-gray-400 mb-4">
              Learn, build, and compete in our immersive Arduino workshop designed for all skill levels.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/40 transition-colors">
                <FacebookIcon className="w-5 h-5 text-blue-400" />
              </a>
              <a href="#" className="bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/40 transition-colors">
                <TwitterIcon className="w-5 h-5 text-blue-400" />
              </a>
              <a href="#" className="bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/40 transition-colors">
                <InstagramIcon className="w-5 h-5 text-blue-400" />
              </a>
              <a href="#" className="bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/40 transition-colors">
                <LinkedinIcon className="w-5 h-5 text-blue-400" />
              </a>
              <a href="#" className="bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/40 transition-colors">
                <YoutubeIcon className="w-5 h-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['#', '#about', '#highlights', '#registration', '#agenda', '#faq'].map((href, i) => (
                <li key={i}>
                  <Link href={href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {['Home', 'About', 'Highlights', 'Registration', 'Agenda', 'FAQs'][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {['Arduino Guides', 'Component Library', 'Project Ideas', 'Code Samples', 'Community Forum'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for future workshop dates and Arduino tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-white flex-grow"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Dev Mates. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
