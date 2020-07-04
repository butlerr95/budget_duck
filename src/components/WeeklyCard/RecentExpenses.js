import React from 'react';
import { MdAdd, MdFormatListBulleted } from 'react-icons/md';

import Font from '../../styles/font';
import styles from '../../styles/RecentExpenses.css';

class RecentExpenses extends React.Component {
    render() {
        return (
            <div className={'recent_expenses'}>
                <div className={'recent_expenses_text'}>Recent</div>
                <div>
                    <MdFormatListBulleted className={'recent_expenses_icon'} />
                    <MdAdd className={'recent_expenses_icon'} />
                </div>
            </div>
        );
    }
}

export default RecentExpenses;