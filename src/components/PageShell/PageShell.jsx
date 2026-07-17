import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Every page in the site — complete or stub — is wrapped in <PageShell>.
// This guarantees the header and footer are always present and identical,
// so no page can accidentally ship without them.
export default function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
