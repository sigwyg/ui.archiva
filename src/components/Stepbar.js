import React from 'react';

const inlineCSS = {
    "background": "red",
}

class Stepbar extends React.Component {
    render() {
        return (
            <div>
                <ol style={inlineCSS}>
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
