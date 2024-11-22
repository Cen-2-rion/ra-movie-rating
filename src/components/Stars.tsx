import { useState } from 'react';
import Star from './Star';

type CountType = {
    count: number
}

const Stars = ({count = 0}: CountType) => {
    const [selected, setSelected] = useState(count);

    const increase = () => setSelected(selected + 1);
    const decrease = () => setSelected(selected - 1);

    if (typeof count !== 'number' || count < 1 || count > 5) {
        return null;
    }

    const arr: Array<number> = [];
    
    for (let i = 1; i <= selected; i++) {
        arr.push(i);
    }

    return (
        <>
            <ul className='card-body-stars'>
                {arr.map(item => (
                    <Star key={item}/>
                ))}
            </ul>
            <div className='card-body-stars-controls'>
                <button className='btn minus' onClick={decrease} disabled={selected === 1}>-</button>
                <span>{selected}</span>
                <button className='btn plus' onClick={increase} disabled={selected === 5}>+</button>
            </div>
        </>
    );
}

export default Stars;
