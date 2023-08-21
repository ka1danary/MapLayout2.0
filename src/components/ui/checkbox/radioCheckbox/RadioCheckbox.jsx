import React, { useState } from 'react';

import moduleRadioCheckbox from './RadioCheckbox.module.sass'

const RadioCheckbox = ({...props}) => {

    const [check, setCheck] = useState(false)
    return (
        <div {...props} className={moduleRadioCheckbox.radioChekboxBox}>
            <input 
                className={moduleRadioCheckbox.radioInputCheckbox}
                type='radio'
                value={check}
                onChange={e => setCheck(e.target.value)}
            />
        </div>
    );
};

export default RadioCheckbox;