import React, { useState } from 'react';
import moduleSearchModal from './SearchModalMenu.module.sass'

const SearchModalMenu = ({ filter }) => {


    return (
        <div className={moduleSearchModal.modalSearchBox}>
            <div className={moduleSearchModal.modalSearchresent}>
                {filter.map(el =>
                    <div className={moduleSearchModal.modalSearchResentElement}>
                        <svg className={moduleSearchModal.modalSearchResentIcon} style={{marginRight : '5px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
                            <path d="M7.4375 15C5.36806 15 3.61111 14.2674 2.16667 12.8021C0.722222 11.3368 0 9.5625 0 7.47917H1.25C1.25 9.21528 1.84722 10.6944 3.04167 11.9167C4.23611 13.1389 5.70139 13.75 7.4375 13.75C9.20139 13.75 10.6944 13.1319 11.9167 11.8958C13.1389 10.6597 13.75 9.15972 13.75 7.39583C13.75 5.67361 13.1319 4.21875 11.8958 3.03125C10.6597 1.84375 9.17361 1.25 7.4375 1.25C6.49306 1.25 5.60764 1.46528 4.78125 1.89583C3.95486 2.32639 3.23611 2.89583 2.625 3.60417H4.8125V4.85417H0.458333V0.520833H1.70833V2.72917C2.43056 1.88194 3.28819 1.21528 4.28125 0.729167C5.27431 0.243056 6.32639 0 7.4375 0C8.47917 0 9.45833 0.194444 10.375 0.583333C11.2917 0.972222 12.0938 1.50347 12.7812 2.17708C13.4688 2.85069 14.0104 3.63889 14.4062 4.54167C14.8021 5.44444 15 6.41667 15 7.45833C15 8.5 14.8021 9.47917 14.4062 10.3958C14.0104 11.3125 13.4688 12.1111 12.7812 12.7917C12.0938 13.4722 11.2917 14.0104 10.375 14.4062C9.45833 14.8021 8.47917 15 7.4375 15ZM10.1042 10.8958L6.89583 7.72917V3.27083H8.14583V7.20833L11 10L10.1042 10.8958Z" fill="#6D6D6D" />
                        </svg>
                        {el.name}
                    </div>
                )}
            </div>

            <div className={moduleSearchModal.modalSearchSearching}>
                {filter.map(el =>
                    <div className={moduleSearchModal.modalSearchResentElement}>
                        {el.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchModalMenu;