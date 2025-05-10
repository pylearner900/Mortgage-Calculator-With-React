import './App.css'
import { Buttons,Inputs } from './components/inputs'
import { useState } from 'react'

function App() {
  
  const [loanAmount,setLoanAmount] = useState(0);
  const [downPayment,setDownPayment] = useState(0);
  const [interestRate,setInterestRate] = useState(0);
  const [loanTerm,setLoanTerm] = useState(0);
  const [result,setResult] = useState(null);

  const handleLoanAmount = (data) => {
    setLoanAmount(data);
  };
  const handleDownPayment = (data) => {
    setDownPayment(data);
  };
  const handleInterestRate = (data) => {
    setInterestRate(data);
  };
  const handleLoanTerm = (data) => {
    setLoanTerm(data);
  };



  const CalculateResult = () => {
    let r = interestRate / 100 / 12;
    let n = loanTerm * 12;
    let principle = loanAmount - downPayment;
    let payment = principle * r * (1 + r) ** n / ((1 + r) ** n - 1);
    setResult(payment);
  }

  const ResetInputs = () => {
    setDownPayment(0);
    setInterestRate(0);
    setLoanAmount(0);
    setLoanTerm(0);
    setResult(null);
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = "");

  }


  return (
    <div id='main-div'>
      <div id='input-div'>
        <h1>Mortgage Calculator</h1>
        <Inputs func={handleLoanAmount} tooltip="The total money you plan to borrow from the lender."  label="Loan Amount" />
        <Inputs func= {handleDownPayment} tooltip="The initial amount you pay upfront toward the home's purchase price."  label="Down Payment" />
        <Inputs func={handleInterestRate} tooltip="The percentage charged annually on the loan amount by the lender."  label="Interest Rate (%)" />
        <Inputs func={handleLoanTerm} tooltip="The total duration over which you agree to repay the loan, typically in years."  label="Loan Term (years)" />
        <span>
        <Buttons onClick={CalculateResult} tooltip="Click to compute your estimated monthly mortgage payment based on the entered values." text="Calculate" /> 
        <Buttons onClick={ResetInputs} tooltip="Clean all inputs" text="Reset" />
        </span>
        {((result != null) && !(isNaN(result)))  && (
          <div className="result">
            <h3>Estimated Monthly Payment:</h3>
            <p>${result.toFixed(2)}</p>
          </div>
        )}

      </div>


    </div>
  )
}

export default App
