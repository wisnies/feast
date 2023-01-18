import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header>
      <nav id='nav'>
        <Link href='/'>Home</Link>
      </nav>
    </header>
  );
};

export default Header;
