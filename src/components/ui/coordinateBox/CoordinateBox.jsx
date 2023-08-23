import React from 'react';
import moduleCoordinate from './CoordinateBox.module.sass'
import ExpandDotsButton from '../button/svgButton/ExpandDotsButton';

const CoordinateBox = () => {
    return (
        <div className={moduleCoordinate.coordinateBox}>
            <div>
                <div className={moduleCoordinate.coordinate1}> <strong style={{ color: '#909090' }}>Широта : </strong>43°06′20″ с.ш.</div>
                <div className={moduleCoordinate.coordinate1}> <strong style={{ color: '#909090' }}>Долгота :</strong> 131°52′24″ в.д.</div>
                <div className={moduleCoordinate.coordinate1}> <strong style={{ color: '#909090' }}>Высота над уровнем моря:</strong> 40 м</div>
            </div>
            <ExpandDotsButton />
        </div>
    );
};

export default CoordinateBox;