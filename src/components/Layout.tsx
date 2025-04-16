import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import Container from './ui/Container';

interface LayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

const Layout = ({ children, fullWidth = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {fullWidth ? children : <Container>{children}</Container>}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
