import style from "./Input.module.scss";

interface IProps extends React.ComponentProps<"input"> {
  // children: ReactNode;
  // primary?: boolean;
  // disabled?: boolean;
  // loading?: boolean;
  inputSize?: 'small' | 'medium' | 'large';
}

function Input({ inputSize, ...rest }: IProps) {
  let className = style.input;
  if (inputSize && inputSize !== 'medium') {
    className += ' ' + style[inputSize];
  }

  return <input className={className} {...rest}/>
}

export default Input;
