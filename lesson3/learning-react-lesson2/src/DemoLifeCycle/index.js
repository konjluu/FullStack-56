import React, {Component} from 'react'

const PhoneData=[
    {
        name: "Iphone"
    },
    {
        name: "Sam Sung"
    },
    {
        name: "Oppo"
    }
]

class DemoLifeCycle extends Component{
    constructor(props){
        super(props);
        this.state={
            isAuthenticated:false,
            phone : [],
        }
        console.log("contructor");
    }

    onLoginHandler=()=>{
        this.setState({
            isAuthenticated:true,
        })

    }

    onLogOutHandler=()=>{
        this.setState({
            isAuthenticated:false,
        })
    }

    getPhoneData=()=>{
        this.setState({
            phones : PhoneData,
        })
    }

    render(){
        console.log("render");

        return(
            <div>
                <h1>Demo Life Cycle</h1>
                {
                    ! this.state.isAuthenticated ? 
                    (<button className='btn btn-primary' onClick={this.onLoginHandler}>Login</button>)
                    :
                    (<button className='btn btn-danger' onClick={this.onLogOutHandler}>LogOut</button>)
                }
            </div>
        )
    }

    componentDidMount(){
        console.log("Component Didmount");
        // lan dau tien lay CALL API
        // this.getPhoneData();
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Component DidUpdate");
        if(prevState.phones!==this.state.phones)
        this.getPhoneData();


    }
}

export default DemoLifeCycle;
//setState thi  render chay lai -> render chay thi DidUpdate chay
