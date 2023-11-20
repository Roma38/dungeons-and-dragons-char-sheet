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
}

function Button({children, primary, disabled, loading, size, circle, onClick}: IProps) {
  let className = style[primary ? 'primary_button' : 'button'];
  if (size && size !== 'medium') {
    className += ' ' + style[size];
  }
  if (circle) {
    className += ' ' + style.circle;
  }

  return <button 
    className={className} 
    onClick={onClick}
    disabled={disabled}
  >
    {loading ? <Loader className={style.loader}/> : children}
  </button>;
}

export default Button;
