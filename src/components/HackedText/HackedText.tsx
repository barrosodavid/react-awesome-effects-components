import { useState } from 'react'
import styles from './HackedText.module.css'

const defaultLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export interface HackedTextProps {
    children: string
    iterationDuration?: number
    letters?: string
    style?: React.CSSProperties
}

export const HackedText = ({children, letters=defaultLetters, iterationDuration=30, style}: HackedTextProps): JSX.Element => {
    console.log(letters.length);
    const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

    const clearEffect = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    const handleMouseHover = (e: any) => {
        let iteration = 0;
          
        clearEffect();
        let interval = setInterval(() => {
          e.target.innerText = e.target.innerText
            .split("")
            .map((letter: string, index: number) => {
              if (index < iteration) {
                return e.target.dataset.value[index];
              }
      
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");
      
          if (iteration >= e.target.dataset.value.length) {
            if (interval)
              clearInterval(interval);
          }
      
          iteration += 1 / 3;
        }, iterationDuration);
      }

    return (
        <h1 data-value={children} onMouseEnter={handleMouseHover}
        style={style} className={styles.hackedText} aria-label={children}>
            {children}
        </h1>
    )
}
