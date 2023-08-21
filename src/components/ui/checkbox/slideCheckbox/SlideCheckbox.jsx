import React from 'react';
import { useState } from 'react';

import moduleSlideCheckbox from './SlideCheckbox.module.sass'

const SlideCheckbox = ({...props}) => {

    const [check, setCheck] = useState(false)

    return (
        <div {...props} className={moduleSlideCheckbox.boxSlideCheck}>
                <label 
                    className={moduleSlideCheckbox.labelCheckbox}
                    value={check}>
                    <input
                        className={moduleSlideCheckbox.inputCheckbox}
                        type='checkbox'
                        value={check}
                        onChange={e => setCheck(e.target.value)}
                    />
                </label>
        </div>
    );
};

export default SlideCheckbox;