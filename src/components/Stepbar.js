import React from 'react';
import styles from './Stepbar.css';

class Stepbar extends React.PureComponent {
    render() {
        return (
            <div>
                <ol className={styles.Stepbar}>
                    <li><span>基本情報の入力</span></li>
                    <li><span>お支払い方法</span></li>
                    <li><span>確認</span></li>
                    <li><span>完了</span></li>
                </ol>
            </div>
        );
    }
}

export default Stepbar;
