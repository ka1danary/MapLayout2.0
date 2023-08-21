import React, { useState } from 'react';

import moduleBaseCheckbox from './Checkboox.module.sass'

const Checkboox = ({...props}) => {

    const [check, setCheck] = useState(false)
    return (
        <div {...props} className={moduleBaseCheckbox.chekboxBox}>
            <input 
                className={moduleBaseCheckbox.inputCheckbox}
                type='checkbox'
                value={check}
                onChange={e => setCheck(e.target.value)}
            />
        </div>
    );
};

export default Checkboox;