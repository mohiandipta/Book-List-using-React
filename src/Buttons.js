import React from 'react';

const Buttons = ({ handleDelete }) => {
    return (
        <button type="button" onClick={handleDelete}>
            delete me
        </button >
    );
}

export default Buttons;
