import React from 'react';
import {withRouter, Link} from "react-router-dom";

class Landing extends React.Component{
    render() {
        return (
            <form action="">
                <div>Username</div>
                <input/>
                <div>Password</div>
                <input/>
                <div>
                    <button className="login">login</button>
                    <Link to={{pathname: '/register'}}>
                        <button className="register">register</button>
                    </Link>
                </div>
            </form>
        )
    }
}

export default withRouter(Landing);