import React, {Component} from 'react';
import Card from "react-bootstrap/Card";

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Button from "react-bootstrap/Button";

class Parking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }

    }
    componentDidMount(){
        const res = fetch("http://127.0.0.1:8000/api/parking/")
            .then (res => res.json())
            .then(

                (result) =>{
                    this.setState({
                        isLoaded:true,
                        items: result,
                    });
                },
                (error) =>{
                    this.setState({
                        isLoaded:false,
                        error});
                }
            )
        // console.log(res)
    }
    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p>ERROR</p>
        } else if (!isLoaded) {
            return <p>LOADING</p>
        } else {
            return (
                <div>

                    <div className={"parkings"}></div>
                    <div className={"parking_list"}>

                        {items.map(item=>(
                            <div className={"parking"} key={"parkingId:"+item.id}>
                                <Card style={{width: '18rem', margin: '15px'}}>
                                    <Card.Body>
                                        <Card.Title style={{textAlign: 'center'}}>{item.adress}</Card.Title>
                                        <Card.Text> </Card.Text>
                                        <Button variant="outline-dark" style={{}}><Link to={`/parking/${item.id}`} className="nav-link px-lg-1 link-dark">Подробнее</Link></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>


            );
        }
    }
}

export default Parking;