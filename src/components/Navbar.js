import style from './Navbar.module.css'

export function NavBar({ children }) {
    return (
      <nav className={style.navbar}>
        {children}
      </nav>
    );
  }