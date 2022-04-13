import React, {Component} from "react"

export default class ChangeCarColor extends Component {
    state={
        carUrl:"black-car.png",
    }

    onChangeCarColor=(color)=>{
        this.setState({
            carUrl:color,
        })
    }
    
    render(){
        const Url= `img/${this.state.carUrl}`;
        return(
            <div>
                <h1 className="text-center">Change Car Color in Lesson2</h1>
                <div className="container">
                    <div className="d-flex">
                        <div className="carResult">
                            <h5>Please choose your's car color</h5>
                            <img src={Url} />
                        </div>
                        <div className="Car-controller">
                            <button className="btn btn-black" onClick={()=>this.onChangeCarColor("black-car.png")} >Black Car</button>
                            <button className="btn btn-black" onClick={()=>this.onChangeCarColor("white-car.png")} >White Car</button>
                            <button className="btn btn-black" onClick={()=>this.onChangeCarColor("red-car.png")} >Red Car</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}