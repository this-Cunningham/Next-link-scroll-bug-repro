import Link from 'next/link';

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ height: '600px' }}>
      <Link href='/' style={{ height: '100px', width: '100px', backgroundColor: 'green'}}>
        Click to go To Home
      </Link>
      </div>
      { children }
    </>
  );
}