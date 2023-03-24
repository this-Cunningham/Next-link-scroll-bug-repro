import Link from 'next/link';

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
    {/* setting layout height to take up more than viewport to push children below the fold/initial viewport */}
      <div style={{ height: '150vh' }}>
      <Link href='/' style={{ height: '100px', width: '100px', backgroundColor: 'green'}}>
        Click to go To Home
      </Link>
      </div>
      { children }
    </>
  );
}