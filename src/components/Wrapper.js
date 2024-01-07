import style from './Wrapper.module.css'

export function Wrapper({ children }) {
    return <div className={style.wrapper}>{children}</div>;
  }
  