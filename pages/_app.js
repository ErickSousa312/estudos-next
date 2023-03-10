import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      </Head>
      <div className={`wrapper ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapse'}`}>
        <nav className="sidebar bg-dark">
          <div className="sidebar-header">
            <h3>My App</h3>
          </div>
          <ul className="list-unstyled components">
            <li>
              <Link href="/">
                 Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
          <div className="container-fluid">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
