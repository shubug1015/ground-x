import Footer from '@components/footer';
import Header from '@components/header';

interface LayoutProps {
  homeRef: any;
  children: React.ReactNode;
}

export default function Layout({ homeRef, children }: LayoutProps) {
  return (
    <div>
      <Header {...homeRef} />
      {children}
      <Footer />
    </div>
  );
}
