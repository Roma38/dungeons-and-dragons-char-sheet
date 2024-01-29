import { ReactNode } from 'react';
import { ReactComponent as Loader } from '../../assets/svg/my-loader.svg';
import style from "./Button.module.scss";

interface IProps {
  children: ReactNode;
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  circle?: boolean;
  className?: string;
}

function Button({ children, primary, disabled, loading, size, circle, className, onClick}: IProps) {
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

  return <button 
    className={resultClassName} 
    onClick={onClick}
    disabled={disabled}
  >
    {loading ? <Loader className={style.loader}/> : children}
  </button>;
}

export default Button;
