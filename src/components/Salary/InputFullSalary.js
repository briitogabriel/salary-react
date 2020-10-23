import React, { Component } from 'react';

export default class InputFullSalary extends Component {

  //desestruturação de event.target com {{chaves duplas}}
  handleInputChange = ({target}) => {
    //necessário converter para número = parseint ( ,base10)
    const newValue = parseInt(target.value, 10);
    this.props.onSalaryChange(newValue);
  };

  render() {
    const { value } = this.props;

    return (
      <div className="col s12 padding">
        <label>Salário Bruto</label>
        <input
          autoFocus
          id="Fullsalary"
          type="number"
          value={value}
          onChange={this.handleInputChange}
          step="100"
          min="0"
          disabled={false}
        />
      </div>
    );
  }
}
