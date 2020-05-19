import React from 'react';
import { connect } from 'react-redux';
import './Alone.css';

const AloneComponent = (props) => {
    return (
        <div className="Alone">
            <div>Standalone Component</div>
            <button className="Button" onClick={props.onAdd}>
                Increment
            </button>
            <button className="Button" onClick={props.onMinus}>
                Decrement
            </button>
            <button
                className="Button"
                onClick={() => {
                    props.onInput(888);
                }}
            >
                Add 888
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.count,
        display: state.static,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch({ type: 'increment' }),
        onMinus: () => dispatch({ type: 'decrement' }),
        onInput: (inputValue) =>
            dispatch({ type: 'input', inputValue: inputValue }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AloneComponent);
