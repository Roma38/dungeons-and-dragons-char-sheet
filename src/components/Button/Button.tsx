import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ReactComponent as Loader } from '../../assets/svg/my-loader.svg';
import style from "./Button.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  primary?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
  circle?: boolean;
}

function Button({ children, primary, loading, size, circle, className, ...rest}: IProps) {
  let resultClassName = 'button ' + style[primary ? 'primary_button' : 'button'];
  if (size && size !== 'medium') {
    resultClassName += ' ' + style[size];
  }
  if (circle) {
    resultClassName += ' ' + style.circle;
  }
  if (className) {
    resultClassName += ' ' + className;
  }

  return <button className={resultClassName} {...rest}>
    {loading ? <Loader className={style.loader}/> : children}
  </button>;
}

export default Button;
