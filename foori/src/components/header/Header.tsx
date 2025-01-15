import Logo from '../common/Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const STYLES = {
  header: `
    w-full h-20 md:h-20
    transition-all duration-300
    fixed bottom-0 md:relative
    bg-white md:bg-gradient-to-r from-[#FFD4BC] to-[#FFBEA3]
  `,
  container: 'h-full max-w-6xl mx-auto flex items-center justify-between',
} as const;

const Header = () => {
  return (
    <header className={STYLES.header}>
      <div className={STYLES.container}>
        <Logo />
        <Navigation />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
