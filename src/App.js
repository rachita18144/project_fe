import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import FormO from "./forms/FormO";
import SurveyForm from "./forms/SurveyForm";
import UploadAudioFile from "./audioCom/UploadAudioFile";


class App extends React.Component {
  render() {
    return (
      <Switch>
        <div className="content">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/fill_form_o" component={FormO} />
          <Route exact path="/fill_survey_form" component={SurveyForm} />
          <Route exact path="/upload_audio_files" component={UploadAudioFile} />
         
        </div>
      </Switch>
    );
  }
}

export default App;