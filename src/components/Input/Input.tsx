import style from "./Input.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'small' | 'medium' | 'large';
}

function Input({ inputSize = 'medium', ...rest }: IProps) {
  let className = style.input + ' input';
  if (inputSize && inputSize !== 'small') {
    className += ' ' + style[inputSize];
  }

  return <input className={className} {...rest}/>
}

export default Input;
