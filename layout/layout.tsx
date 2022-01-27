import Footer from '@components/footer';
import Header from '@components/header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='relative'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
