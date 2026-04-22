import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'About', to: '/about' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white bg-[#34418f]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <NavLink to="/" className="flex items-center gap-3">
              <img src={logo} alt="BulldogEx Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tighter text-white">
                BulldogEx Shop
              </span>
            </NavLink>
            <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100">
              Campus essentials, simple ordering. Empowering your shopping experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className="text-sm text-blue-200 transition hover:text-white"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-200">
            © {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;