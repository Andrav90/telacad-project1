import React from 'react';
import { connect } from 'react-redux';
import UserList from '../../components/userList/UserList';
import PostList from '../../components/postList/PostList';
import UserAddForm from '../../components/userAddForm/UserAddForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ColorsButtons from '../../components/colorsButtons/ColorsButtons';
import userThumbnail from '../../assets/thb.svg.png'; 
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        users: [],
        usersAreDisplayed: true
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            data = data.filter(user => user.id < 4);
            data.forEach(user => {
              user.isGoldClient = false;
              user.salary = '4000';
              user.photo = userThumbnail;
            });
            this.setState({users: data});
          })
    }

    getMaxId(users) {
        let maxId = 0;
        users.forEach(user => {
            if (user.id > maxId) {
                maxId = user.id;
            }
        });
        return maxId;
    }

    submitAddForm(event, name, email, salary, photo, isGoldClient) {
        event.preventDefault();
        this.setState(prevState => {
            return {
                users: [
                    ...prevState.users,
                    {
                        id: this.getMaxId(prevState.users) + 1,
                        name,
                        email,
                        salary,
                        photo,
                        isGoldClient
                    }
                ]
            }
        });
    }

    handleUsersDisplay(){
        if(this.state.usersAreDisplayed === false){
            this.setState({usersAreDisplayed: true})
        }
    }

    handlePostsDisplay(){
        if(this.state.usersAreDisplayed === true){
            this.setState({usersAreDisplayed: false})
        }
    }

    render() {
        let { backgroundColor, textColor } = this.props;
        const [updatedBackgroundColor, updatedTextColor] = [backgroundColor.backgroundColor, textColor.textColor]

        let display;
        if (this.state.usersAreDisplayed){
            display = <UserList users={this.state.users} />
        } else {
            display = <PostList />
        }
        
        return(
            <div className="app" style={{ backgroundColor: updatedBackgroundColor, color: updatedTextColor}}>
                <Header />
                <UserAddForm submitAddForm={(event, name, email, salary, photo, isGoldClient) => this.submitAddForm(event, name, email, salary, photo, isGoldClient)}/>
                
                {display}

                <br/>
                <ColorsButtons />
                <br />
                <div className="ui buttons buttons" style={{ marginBottom: '30px' }}>
                    <button className="ui button" style={{ backgroundColor: 'peachpuff' }} onClick={event => this.handleUsersDisplay(event)}>Show users</button>
                    <div className="or"></div>
                    <button className="ui button" style={{ backgroundColor: 'peachpuff' }} onClick={event => this.handlePostsDisplay(event)}>Show posts</button>
                </div>
        
                <Footer />                  
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        backgroundColor: state.backgroundColor,
        textColor: state.textColor,
    };
};

export default connect(mapStateToProps, null)(Home);