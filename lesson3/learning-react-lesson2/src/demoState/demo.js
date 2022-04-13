import React, {Component} from "react"

class DemoState extends Component {
  //   Property;
  //   state = {
  //     isAuthenticated: false,
  //     isLoading: false,
  //     students: [],
  //   };

    constructor(props){
        super(props);
        this.state={
            isAuthenticated:false,
            isLoading:false,
            student:[]
        };
    }

    onSignInHandler=()=>{
        // this.isAuthenticated=true;
        // console.log("OK");
        this.setState({
            isAuthenticated:true,
        });
    };

    onLogout=()=>{
        this.setState({
            isAuthenticated:false,
        });
    };

    render(){
        const UI =this.state.isAuthenticated ? (
            <div>
                <h1>Welcome to My Website</h1>
                <button onClick={this.onLogout} >Logout</button>
            </div>
        ) : (
            <div>
                <h1>Pls,Login to My Web</h1>
                <button onClick={this.onSignInHandler}>Login</button>
            </div>
        );
        return(<div>{UI}</div>);
    }
}

export default DemoState;

//JSX : Javascript XML (Cấu trúc HTML ở trong react)
// method: phương thức (function )

// Method render() được gọi lại khi và chỉ khi state thay đổi.

// Linear => function => Class (Object) => module
// Class compoennt => functional (hooks)
// Angular => Typescript (OOP)