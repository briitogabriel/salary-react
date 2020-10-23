import React, { Component } from 'react';

import InputFullSalary from './components/Salary/InputFullSalary';
import InputReadOnly from './components/Salary/InputReadOnly';
import ProgressBarSalary from './components/Salary/ProgressBarSalary';

import { formatValue } from './helpers/formatHelper';
import { calculateSalaryFrom } from './helpers/salary';

export default class App extends Component {      
  constructor() {
    super();

    //estado inicial
    this.state = {
      fullSalary: 1000,
    };
  }

  //atualização do estado de salário (state executa RENDER)
  handleSalaryChange = (newSalary) => {
    this.setState({fullSalary: newSalary});
  };

  //renderização de TODOS os componentes que refletem o salário atualizado
  render() {
    const { fullSalary } = this.state;
    const calculated = calculateSalaryFrom(fullSalary);

    const percentINSS = (calculated.discountINSS / fullSalary)*100;
    const percentIRPF = (calculated.discountIRPF / fullSalary)*100;
    const percentNetSalary = 100 - percentINSS - percentIRPF;

    return (
    <div className="padding container">
      <h1 className="center">React Salário</h1>

      <InputFullSalary 
        value={fullSalary}
        onSalaryChange={this.handleSalaryChange}
      />

      <section className="row">
        <InputReadOnly 
          value={isNaN (calculated.baseINSS)
          ? "-"
          : formatValue(calculated.baseINSS)}
          name="baseINSS"
          label="Base INSS"
          color="#000"
        />

        <InputReadOnly 
          value={isNaN (percentINSS)
            ? "-"
            :`${formatValue(calculated.discountINSS)} (${(percentINSS).toFixed(2)}%)`}
          name="descontoInss"
          label="Desconto INSS"
          color="#e67e22"
        />

        <InputReadOnly 
          value={isNaN (calculated.baseIRPF)
            ? "-"
            : formatValue(calculated.baseIRPF)}
          name="baseIRPF"
          label="Base IRPF"
          color="#000"
        />

        <InputReadOnly 
          value={isNaN (percentIRPF)
            ? "-"
            :`${formatValue(calculated.discountIRPF)} (${(percentIRPF).toFixed(2)}%)`}
          name="descontoIrpf"
          label="Desconto IRPF"
          color="#c0392b"
        />
      </section>

      <section className="row">
        <InputReadOnly 
          value={isNaN (percentNetSalary)
            ? "-"
            :`${formatValue(calculated.netSalary)} (${(percentNetSalary).toFixed(2)}%)`}
          name="salarioLiquido"
          label="Salário Líquido"
          color="#16a085"
        />
      </section>

      <div className="padding"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ProgressBarSalary value={(percentINSS).toFixed(1)} color="#e67e22" />
          <ProgressBarSalary value={(percentIRPF).toFixed(1)} color="#c0392b" />
          <ProgressBarSalary value={(percentNetSalary).toFixed(1)} color="#16a085" />
        </div>
    </div>
    );
  }
}
