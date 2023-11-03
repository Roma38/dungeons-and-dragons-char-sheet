import { ReactNode } from 'react';
import style from "./Button.module.scss";

interface IProps {
  children: ReactNode;
  primary?: boolean;
}

function Button({children, primary}: IProps) {
  return <button className={style[primary ? 'primary-button' : 'button']} >
    {children}
  </button>;
}

export default Button;
