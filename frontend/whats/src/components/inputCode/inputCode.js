import {  useState, useRef } from 'react'
import './inputCode.css'

export default ({ length, onComplete }) => {
    const [code, setCode] = useState([...Array(length)].map(() => ""));
    const inputs = useRef([]);
  

    const processInput = (e, slot) => {
        const num = e.target.value;
        if (/[^0-9]/.test(num)) return;
        const newCode = [...code];
        newCode[slot] = num;
        setCode(newCode);
        if (slot !== length - 1) {
            inputs.current[slot + 1].focus();
        }
        if (newCode.every(num => num !== "")) {
            onComplete(newCode.join(""));
        }
    };

    const onKeyUp = (e, slot) => {
        if (e.keyCode === 8 && !code[slot] && slot !== 0) {
            const newCode = [...code];
            newCode[slot - 1] = "";
            setCode(newCode);
            inputs.current[slot - 1].focus();
        }
    };

    return (


        <div id="form-input-code">
            {code.map((num, idx) => {
                return (
                    <input
                        placeholder='-'
                        className='codigo'
                        key={idx}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={num}
                        autoFocus={!code[0].length && idx === 0}
                        onChange={e => processInput(e, idx)}
                        onKeyUp={e => onKeyUp(e, idx)}
                        ref={ref => inputs.current.push(ref)}
                    />
                );
            })}
        </div>
    );
};