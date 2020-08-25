import React from 'react';
import { connect } from 'react-redux';
import { changeBackgroundColor } from '../../redux/backgroundColor/BackgroundColorActions';
import { changeTextColor } from '../../redux/textColor/TextColorActions';

function ColorsButtons(props){
    return (
        <div className="buttons ui buttons" style={{marginBottom: '30px'}}>
            <button className="ui button" style={{backgroundColor: 'peachpuff'}}
            >
                <input type="color" name="backgroundColor" onChange={(event) => props.changeBackgroundColor(event.target.value)} style={{marginRight: '15px'}}/>
                Change background color
            </button>
            <div className="or"></div>
            <button className="ui button" style={{backgroundColor: 'peachpuff'}}
            >
                <input type="color" name="textColor" onChange={(event) => props.changeTextColor(event.target.value)} style={{marginRight: '15px'}}/>
                Change text color
            </button>
        </div>
    );
};

function mapDispatchToProps(dispatch){
    return {
        changeBackgroundColor: payload => dispatch(changeBackgroundColor(payload)),
        changeTextColor: payload => dispatch(changeTextColor(payload)),
    };
};

export default connect(null, mapDispatchToProps)(ColorsButtons);