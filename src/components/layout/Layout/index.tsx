import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { theme } from '@/styles/theme';
import { Container } from './Layout.style';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
