import React, { Component } from 'react'
import './Office.scss'
import office from "../../assets/images/office.png"

export default class Office extends Component {

    render() {
        return (
            <div className="Office">
                {this.props.children}
                <img src={office} alt="" className="Office__img"/>
            </div>
        )
    }
}
