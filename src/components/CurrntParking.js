import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class RangeType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            parking: [],
            models: [],

        }
        this.id=1;


    }
    componentDidMount(){
        let combo=window.location.pathname.split('/');
        this.id=combo[2]
        console.log(this.id)
        const res = fetch("http://127.0.0.1:8000/api/parking/"+this.id)
            .then (res => res.json())
            .then(

                (result) =>{
                    this.setState({
                        isLoaded:true,
                        parking: result,
                    });
                    // this.range=result;

                },
                (error) =>{
                    this.setState({
                        isLoaded:false,
                        error});
                }
            )

    }
    render() {
        const {error, isLoaded, parking} = this.state;
        return (
            <div>
                <Link to='/'>Главная</Link> / <Link to={"/parking/"+parking.id}>Парковка № {parking.id}</Link>
                <Card style={{width: '18rem', margin: '15px'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}}>{parking.adress}</Card.Title>
                        <Card.Text>
                            <div className={"cost"}>Стоимость: {parking.price}</div>
                            <div className={"places"}>Места: {parking.places}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

export default RangeType;