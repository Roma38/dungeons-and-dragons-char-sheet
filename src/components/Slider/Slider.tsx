import { useRef, MouseEventHandler } from 'react';
import { roundToStep } from '../../utils';
import style from "./Slider.module.scss";

interface IProps {
  max?: number;
  min?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

function Slider({max = 100, min = 0, step = 1, value, onChange}: IProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const initialPositionRef = useRef<number | null>(null);
  const position = (max - min) * value / 100;

  const dragStartHandler: MouseEventHandler = ({ clientX }) => {
    initialPositionRef.current = clientX;
    document.addEventListener<'mousemove'>('mousemove', dragHandler);
    document.addEventListener<'mouseup'>('mouseup', dragEndHandler, { once: true });
  }
  
  const dragEndHandler = () => {
    document.removeEventListener('mousemove', dragHandler);
  }

  const dragHandler = ({ clientX }: MouseEvent) => {
    if (!railRef.current || !initialPositionRef.current) {
      throw new Error('No slider rail or initial position ref :(');
    }
    const offset = (clientX - initialPositionRef.current) * (max - min) / railRef.current.offsetWidth;
    const newValue = value + offset;

    if (newValue > max) {
      onChange(max);
    } else if(newValue < min) {
      onChange(min);
    } else {
      onChange(roundToStep(newValue, step));
    }
  }

  const clickHandler: MouseEventHandler = ({ clientX }) => {
    if (!railRef.current) {
      throw new Error('No slider rail ref :(');
    }
    const { offsetLeft, offsetWidth } = railRef.current;
    const newValue = (clientX - offsetLeft) * (max - min) / offsetWidth ;
    onChange(roundToStep(newValue, step));
  }

  return (
    <div className={style.slider}>
      <div 
        ref={railRef} 
        className={style.rail}
        onClick={clickHandler}
      >
        <div 
          className={style.track} 
          style={{ width: position + '%' }}
        />
        <div 
          className={style.handle}
          style={{ left: position + '%' }}
          onMouseDown={dragStartHandler}
          onMouseUp={dragEndHandler}
          title={String(value)}
        />
      </div>
    </div>
  )
}

export default Slider;
