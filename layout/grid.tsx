interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex-center-start w-screen'>
      <div className='w-full max-w-[1180px]'>{children}</div>
    </div>
  );
}
