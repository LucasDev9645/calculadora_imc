import React from "react";
import "./form.css";

const Form = () => {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [imc, setImc] = React.useState("");

  const resultadoIMC = () => {
    const imcTotal = peso / (altura * altura);
    const total = imcTotal.toFixed(2);
    if (imcTotal < 18.5) {
      return (
        <>
          <p>
            <b>IMC: </b>
            {total}
          </p>
          <p>
            <b>CLASSIFICAÇÃO: </b>Magreza
          </p>
        </>
      );
    } else if (imcTotal > 18.49 && imcTotal <= 25.0) {
      return (
        <>
          <p>
            <b>IMC: </b>
            {total}
          </p>
          <p>
            <b>CLASSIFICAÇÃO: </b>Normal
          </p>
        </>
      );
    } else if (imcTotal >= 25.01 && imcTotal <= 30.0) {
      return (
        <>
          <p>
            <b>IMC: </b>
            {total}
          </p>
          <p>
            <b>CLASSIFICAÇÃO: </b>Sobrepeso
          </p>
        </>
      );
    } else if (imcTotal >= 30.01 && imcTotal <= 40.0) {
      return (
        <>
          <p>
            <b>IMC: </b> {total}
          </p>
          <p>
            <b>CLASSIFICAÇÃO: </b>Obesidade
          </p>
        </>
      );
    } else if (imcTotal >= 40.01) {
      return (
        <>
          <p>
            <b>IMC: </b>
            {total}
          </p>
          <p>
            <b>CLASSIFICAÇÃO: </b> Obesidade Grave
          </p>
        </>
      );
    }
  };

  function limparFormulario() {
    setPeso("");
    setAltura("");
    setImc("");
  }

  return (
    <form className="form">
      <h1>Calculadora de IMC</h1>
      <input
        placeholder="Peso (ex: 69,2)"
        type="number"
        onChange={({ target }) => setPeso(Number(target.value))}
        value={peso}
      />
      <input
        placeholder="Altura (ex: 1,60)"
        type="number"
        onChange={({ target }) => setAltura(Number(target.value))}
        value={altura}
      />
      <button onClick={() => setImc(resultadoIMC)} type="button">
        CALCULAR
      </button>
      <button type="button" onClick={limparFormulario} className="clear">
        LIMPAR
      </button>
      <div className="resultado">{imc}</div>
    </form>
  );
};

export default Form;
