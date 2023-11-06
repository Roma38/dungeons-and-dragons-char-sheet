import { ReactNode } from 'react';
import { ReactComponent as Loader } from '../../assets/svg/my-loader.svg';
import style from "./Button.module.scss";

interface IProps {
  children: ReactNode;
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

function Button({children, primary, disabled, loading, onClick}: IProps) {
  return <button 
    className={style[primary ? 'primary-button' : 'button']} 
    onClick={onClick}
    disabled={disabled}
  >
    {loading ? <Loader className={style.loader}/> : children}
  </button>;
}

export default Button;
