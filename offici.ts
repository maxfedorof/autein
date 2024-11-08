import React from 'react';

const Toolbar = () => {
    return (
        <div>
            {/* ToolBar Hint */}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

function handleClick() {
    alert('Button clicked!');
}

export default Toolbar;
