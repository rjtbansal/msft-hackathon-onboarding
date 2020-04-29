import React, { Component } from 'react'
import './Office.scss'
import office from "../../assets/images/office.png"

export default class Office extends Component {

    constructor(props){
        super(props)
        this.state = {
            points : 256
        }
    }

    displayPoints = () => {
        return (
            <div className="Office__points-card">
                <div className="Office__points-container">
                    <img src="https://www.katarinaprice.com/wp-content/uploads/2012/03/IMG_6569-1.jpg" alt="" className="Office__user-img"/>
                    <h3 className="Office__points">
                        {this.props.points}
                    </h3>
                </div>
                <button className="Office__points-btn">
                    Redeem Points
                </button>
                <button className="Office__points-btn">
                    Edit Profile
                </button>
            </div>
        )
    }


    render() {
        return (
            <div className="Office">
                {this.displayPoints()}
                {this.props.children}
                <img src={office} alt="" className="Office__img"/>
            </div>
        )
    }
}
