import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import Container from './ui/Container';
import { motion } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

const Layout = ({ children, fullWidth = false }: LayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className="flex flex-col min-h-screen"
    >
      <Header />
      <main className="flex-grow">
        {fullWidth ? children : <Container>{children}</Container>}
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
