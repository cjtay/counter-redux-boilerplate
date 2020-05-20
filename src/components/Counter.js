import React from 'react';
import { connect } from 'react-redux';
import SubCounter from './SubCounter';

import './Alone.css';

const Counter = (props) => {
    return (
        <>
            <div className='Title'>{props.display}</div>
            <div>Current Count: {props.counter}</div>
            <div className='Alone'>
                <div>Counter Component</div>
                <button className='Button' onClick={props.onAdd}>
                    Increment
                </button>
                <button className='Button' onClick={props.onMinus}>
                    Decrement
                </button>
                <button
                    className='Button'
                    onClick={() => {
                        props.onInput(10000);
                    }}
                >
                    Add 10000
                </button>
                <SubCounter add={props.onInput} />
            </div>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Alternative for dispatch
// const onAdd = () => ({ type: 'increment' });
// const onMinus = () => ({ type: 'decrement' });

// export default connect(mapStateToProps, { onAdd, onMinus })(Counter);
