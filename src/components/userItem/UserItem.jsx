import React from 'react';
import userThumbnail from '../../assets/thb.svg.png'; 

class UserItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            users: [this.props]
        };
    };
      
    render(){
        const {name, email, salary, isGoldClient} = this.props;
        return (
            <div className="divs">
                <h3>Name: {name}</h3>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Salary: </strong>{salary}</p>
                <img style={{width: '50px', height: '50px', marginBottom: '20px'}} src={userThumbnail} alt="" />
                { isGoldClient ? <h4>GOLD client</h4> : null }
            </div>
        );
    };
};

export default UserItem;
