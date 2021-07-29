
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import SelectInsurance from './pages/selectInsurance';
import Contraction from './pages/contraction';

class App extends Component {
  state = {
    contractor : {  // 계약자
      relation : '',
      name : '',
      residentNum1: '',
      residentNum2: '',
      gender: '',
      insuranceAge: '',   // 보험나이
      insuranceBirth: '', // 상령일
      job: '',
      drivingJob: '',
      riskGrade: '',
      injuryGrade: '',
    },
    theInsured : { // 피보험자
      relation : '',
      name : '',
      residentNum: '',
      gender: '',
      insuranceAge: '',   // 보험나이
      insuranceBirth: '', // 상령일
      job: '',
      drivingJob: '',
      riskGrade: '',
      injuryGrade: '',
    },
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Route path="/" component={SelectInsurance} exact/>
          <Route path="/contract" component={Contraction}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;