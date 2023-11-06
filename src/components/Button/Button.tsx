import { ReactNode } from 'react';
import { ReactComponent as Loader } from '../../assets/svg/my-loader.svg';
import style from "./Button.module.scss";

interface IProps {
  children: ReactNode;
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

function Button({children, primary, disabled, loading}: IProps) {
  return <button className={style[primary ? 'primary-button' : 'button']} disabled={disabled}>
    {loading ? <Loader className={style.loader}/> : children}
  </button>;
}

export default Button;
