import React, { Component } from 'react'

export default class InputReadOnly extends Component {
    render() {
        const { name, label, value, color } = this.props;
        return (
            <div className="col s3">
                <label>{label}</label>
                <input
                    id={name}
                    style={{color: color, fontWeight: "bold"}}
                    type="text"
                    value={value}
                    readOnly
                />
            </div>
        )
    }
}
