import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AudiosComponent from "../audioCom/AudiosComponent";

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  formControlShort:{
    margin: theme.spacing(1),
    minWidth: 180,
  },
  formControlLarge:{
    margin: theme.spacing(1),
    minWidth: 700,
  },
  formControlFullWidth: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class SurveyFormComponent extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
     selectedTime: new Date('2014-08-18T21:11:54'),
     subjectId: "",
     name:"",
     homeAddress:"",
     age:"",
     sex:"",
     village:"",
     district:"",
     dateOfPtca: new Date('2014-08-18T21:11:54'),
     ptcaHospital:"",
     firstInterviewDate: new Date('2014-08-18T21:11:54'),
     secondInterviewDate: new Date('2014-08-18T21:11:54'),
     siteId:"",
     whoAnsweringQuestions:"",
     informedConsentObtained:"",
     telephone:"",
     availableDate:new Date('2014-08-18T21:11:54'),
     availableTime:new Date('2014-08-18T21:11:54'),
     nonResponder:"",
     numberOfTimesContacted:"",
     researchInterviewer:"",
     dataEntryOperator:"",
     highestEduLevel:"",
     maritialStatus:"",
     whoStayingWithPatient:"",
     ifEmployed:"",
     typeOfJob:"",
     whyNoWork:"",
     whereWork:"",
     ifDiabetes:"",
     lastBloodSugarLevel:"",
     lastFastingBloodSugar:"",
     postPrandialSugar:"",
     hba1cLevel:"",
     ifBp:"",
     valueOfBp:"",
     noOfMonthsBp:"",
     ifAlcohol:"",
     tobaccoSmokingStatus:"",
     bidiFrequency:"",
     cigaretteFrequency:"",
     tobaccoFrequency:"",
     substanceAbuse:"",
     pillsForget:"",
     forgetHeartMedicine:"",
     didNotTakeMedicine:"",
     stopMedicine:"",
     forgetMedicineTravel:"",
     yesterdayMedicine:"",
     stopMedicineWhenAlright:"",
     stickingToPlan:"",
     difficultyRemembering:"",
     gotMedicine:"",
     ifGotFree:"",
     isEasilyAvailable:"",
     ifAffordable:"",
     isDispensaryClose:"",
     ifPharmacyDesignated:"",
     ifInformedThroughCall:"",
     ifSmsSent:"",
     sideEffectOne:"",
     sideEffectTwo:"",
     sideeffectThree:"",
     sideEffectFour:"",
     sideEffectFive:"",
     sideEffectSix:"",
     sideEffectSeven:"",
     sideEffectEight:"",
     sideEffectZero:"",
     selectLipidProfile:"",
     selectLipidProfilePain:"",
     selectPainDegree:"",
     landType:"",
     houseType:"",
     fuelType:"",
     sanitation:"",
     ifComputer:"",
     ecosprineSelect:"",
     ecosprineDose:"",
     ecosprineFrequency:"",
     clopidogrelSelect:"",
     clopidogrelDose:"",
     clopidogrelFrequency:"",
     prasugrelSelect:"",
     prasugrelDose:"",
     prasugrelFrequency:"",
     statinsSelect:"",
     selectStatinsDose:"",
     statinsFrequency:"",
     aceInhibitorsSelect:"",
     selectAceInhibitorsDose:"",
     aceInhibitorsFrequency:"",
     antiAnginalSelect:"",
     selectAntiAnginalDose:"",
     antiAnginalFrequency:"",
     betaBlockersSelect:"",
     selectBetaBlockersDose:"",
     betaBlockersFrequency:"",
     insulinSelect:"",
     selectInsulinDose:"",
     insulinFrequency:"",
     ohaSelect:"",
     selectOhaDose:"",
     ohaFrequency:"",
     selectDressing:"",
     selectRunning:"",
     selectSports:"",
     selectHeavy:"",
     selectHill:"",
     selectBrisk:"",
     selectGroceries:"",
     selectGardening:"",
     selectShowering:"",
     selectIndoors:""
   };
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} style={{padding:"1.5em"}}>
          <AudiosComponent url = "http://www.music.helsinki.fi/tmt/opetus/uusmedia/esim/a2002011001-e02.wa" />
        </Grid>

        <Grid item xs={12} sm={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          margin="normal"
          id="surveyStartTime"
          label="Survey Start Time"
          value = {this.state.selectedTime}
          onChange={time => {
            console.log(this.state.selectedTime)
            console.log(time)
            this.setState({selectedTime : time });
          }}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </MuiPickersUtilsProvider>
        </Grid>

      <Grid item xs={12} sm={5}>
          <TextField style={{margin:"1em"}}
            required
            id="subjectId"
            label="Subject ID"
            fullWidth
            defaultValue = {this.state.subjectId}
            onBlur={e => {
              this.setState({ subjectId: e.target.value });
            }}
          />
      </Grid>

      <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            label="Name"
            defaultValue = {this.state.name}
            fullWidth
            onBlur={e => {
              this.setState({ name: e.target.value });
            }}
          />
      </Grid>
      <Grid item xs={12} sm={4}>
          <TextField 
            required
            id="Address"
            label="Home Address"
            defaultValue = {this.state.address}
            fullWidth
            onBlur={e => {
              this.setState({ address: e.target.value });
            }}
          />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectGender">Sex</InputLabel>
        <Select
          id="selectGender"
          value={this.state.sex}
          onChange={e => {
            this.setState({sex: e.target.value });
          }}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        </Select>
        </FormControl>
    </Grid>


      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="village"
            label="Village"
            defaultValue = {this.state.village}
            fullWidth
            onBlur={e => {
              this.setState({ village: e.target.value});
            }}
          />
      </Grid>

      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="district"
            label="District"
            fullWidth
            defaultValue = {this.state.district}
            onBlur={e => {
              this.setState({ village: e.target.value });
            }}
          />
      </Grid>
      <Grid item xs={12} sm={6}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="dateOfPtca"
          label="Date of PTCA"
          format="MM/dd/yyyy"
          value={this.state.dateOfPtca}
          onChange={date => {
            this.setState({dateOfPtca: date });
          }}

          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        </Grid>

      <Grid item xs={12} sm={5}>
          <TextField style={{margin:"1em"}}
            id="ptcaHospital"
            label="Hospital where PTCA done"
            fullWidth
            defaultValue = {this.state.ptcaHospital}
            onBlur={e => {
              this.setState({ ptcaHospital: e.target.value });
            }}
          />
      </Grid>
      <Grid item xs={12} sm={6}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="firstInterviewDate"
          label="Date of 1st Interview"
          format="MM/dd/yyyy"
          value={this.state.firstInterviewDate}
          onChange={date => {
            this.setState({firstInterviewDate: date });
          }}

          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
      </Grid>

      <Grid item xs={12} sm={6}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="secondInterviewDate"
          label="Date of 2nd Interview"
          format="MM/dd/yyyy"
          value={this.state.secondInterviewDate}
          onChange={date => {
            this.setState({secondInterviewDate: date });
          }}

          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} sm={5}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectSiteid">Site ID</InputLabel>
        <Select
          id="selectSiteid"
          value={this.state.siteId}
          onChange={e => {
            this.setState({siteId: e.target.value });
          }}
        >
          <MenuItem value={"Metro_city"}>Metro City</MenuItem>
          <MenuItem value={"Out_of_metro_city"}>Out Of Metro City</MenuItem>
        </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={7}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestions">Who is answering the questions?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.whoAnsweringQuestions}
          onChange={e => {
            this.setState({whoAnsweringQuestions: e.target.value });
          }}
        >
          <MenuItem value={"self"}>Self</MenuItem>
          <MenuItem value={"relative"}>Relative</MenuItem>
        </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={7}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectConsent">Informed Consent Obtained?</InputLabel>
        <Select
          id="selectConsent"
          value={this.state.informedConsentObtained}
          onChange={e => {
            this.setState({informedConsentObtained: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={5}>
          <TextField style={{marginRight:"1em"}}
            id="telephone"
            label="Telephone"
            fullWidth
            defaultValue = {this.state.telephone}
            onBlur={e => {
              this.setState({ telephone: e.target.value });
            }}
          />
      </Grid>

     <Grid item xs={12} sm={4}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="availableDate"
          label="Available Date"
          format="MM/dd/yyyy"
          value={this.state.availableDate}
          onChange={date => {
            this.setState({availableDate: date });
          }}

          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
      </Grid>



     <Grid item xs={12} sm={4}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          margin="normal"
          id="availableTime"
          label="Available Time"
          value = {this.state.availableTime}
          onChange={time => {
            console.log(this.state.availableTime)
            console.log(time)
            this.setState({availableTime: time });
          }}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </MuiPickersUtilsProvider>
     </Grid>
     <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectNon">Non Responder</InputLabel>
        <Select
          value={this.state.nonResponder}
          onChange={e => {
            this.setState({nonResponder: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>


      <Grid item xs={12} sm={4}>
          <TextField
            id="noOfTimesContacted"
            label="Number of times contacted"
            fullWidth
            defaultValue = {this.state.numberOfTimesContacted}
            onBlur={e => {
              this.setState({numberOfTimesContacted : e.target.value });
            }}
          />
      </Grid>
      <Grid item xs={12} sm={4}>
          <TextField
            id="researchInterviewer"
            label="Research Interviewer"
            fullWidth
            defaultValue = {this.state.researchInterviewer}
            onBlur={e => {
              this.setState({researchInterviewer : e.target.value });
            }}
          />
      </Grid>
      <Grid item xs={12} sm={4}>
          <TextField
            id="dataEntryOperator"
            label="Data Entry Operator"
            fullWidth
            defaultValue = {this.state.dataEntryOperator}
            onBlur={e => {
              this.setState({dataEntryOperator : e.target.value });
            }}
          />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectEdu">Highest Edu Level</InputLabel>
        <Select
          id="selectEdu"
          value={this.state.highestEduLevel}
         onChange={e => {
            this.setState({highestEduLevel: e.target.value });
          }}
        >
          <MenuItem value={"illiterate"}>Illiterate</MenuItem>
          <MenuItem value={"illiterate_without_formal_edu"}>Illiterate without formal Education</MenuItem>
          <MenuItem value={"below_primary_level"}>Below primary level</MenuItem>
          <MenuItem value={"primary"}>Primary</MenuItem>
          <MenuItem value={"middle"}>Middle</MenuItem>
          <MenuItem value={"ssc"}>SSC</MenuItem>
          <MenuItem value={"hsc"}>HSC</MenuItem>
          <MenuItem value={"graduate"}>Graduate</MenuItem>
          <MenuItem value={"post_graduate"}>Post Graduate</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={8}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectMaritial">Current Maritial Status</InputLabel>
        <Select
          id="selectMaritial"
          value={this.state.maritialStatus}
         onChange={e => {
            this.setState({maritialStatus: e.target.value });
          }}
        >
          <MenuItem value={"married"}>Married</MenuItem>
          <MenuItem value={"unmarried"}>Unmarried</MenuItem>
        </Select>
        </FormControl>
    </Grid>
   
   <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectStaying">Who is staying with the patient</InputLabel>
        <Select
          id="selectStaying"
          value={this.state.whoStayingWithPatient}
         onChange={e => {
            this.setState({whoStayingWithPatient: e.target.value });
          }}
        >
          <MenuItem value={"yourself"}>Yourself</MenuItem>
          <MenuItem value={"spouse"}>Spouse</MenuItem>
          <MenuItem value={"parents"}>Parents</MenuItem>
          <MenuItem value={"siblings"}>Siblings</MenuItem>
          <MenuItem value={"children"}>Children</MenuItem>
          <MenuItem value={"relatives"}>Relatives</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={6} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectMaritial">Are You Employed</InputLabel>
        <Select
          id="selectMaritial"
          value={this.state.ifEmployed}
         onChange={e => {
            this.setState({ifEmployed: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectJob">Type of job</InputLabel>
        <Select
          id="selectJob"
          value={this.state.typeOfJob}
         onChange={e => {
            this.setState({typeOfJob: e.target.value });
          }}
        >
          <MenuItem value={"fulltime"}>FullTime</MenuItem>
          <MenuItem value={"part_time"}>Part Time</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectWhyNoWork">Why don't you work</InputLabel>
        <Select
          id="selectWhyNoWork"
          value={this.state.whyNoWork}
         onChange={e => {
            this.setState({whyNoWork: e.target.value });
          }}
        >
          <MenuItem value={"dont_want_to_work"}>Don't want to work</MenuItem>
          <MenuItem value={"lost_job"}>Lost Job</MenuItem>
          <MenuItem value={"too_sick_to_work"}>Too sick to carry on working</MenuItem>
          <MenuItem value={"dont_need_to_work"}>Don't need to work</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
          <MenuItem value={"na"}>NA</MenuItem>
        </Select>
        </FormControl>
  </Grid>

  <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="whereWork">Do you usually work indoors or outdoor?</InputLabel>
        <Select
          id="whereWork"
          value={this.state.whereWork}
          onChange={e => {
            this.setState({whereWork: e.target.value });
          }}
        >
          <MenuItem value={"indoor"}>Indoor</MenuItem>
          <MenuItem value={"outdoor"}>Outdoor</MenuItem>
          <MenuItem value={"both"}>Both</MenuItem>
        </Select>
        </FormControl>
  </Grid>
  
  <Grid item xs={12} sm={12}>
    <Typography variant="h5" align="center">
            Basic Amenities
    </Typography> 
  </Grid>

  <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="landType">Land</InputLabel>
        <Select
          id="landType"
          value={this.state.landType}
          onChange={e => {
            this.setState({landType: e.target.value });
          }}
        >
          <MenuItem value={"irrigated"}>Irrigated</MenuItem>
          <MenuItem value={"non_irrigated"}>Non-irrigated</MenuItem>
        </Select>
        </FormControl>
  </Grid>
  <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="houseType">House</InputLabel>
        <Select
          id="houseType"
          value={this.state.houseType}
          onChange={e => {
            this.setState({houseType: e.target.value });
          }}
        >
          <MenuItem value={"pakka"}>Pakka</MenuItem>
          <MenuItem value={"semi_pakka"}>Semi-pakka</MenuItem>
          <MenuItem value={"kaccha"}>Kaccha</MenuItem>
        </Select>
        </FormControl>
  </Grid>
  <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="waterType">Water</InputLabel>
        <Select
          id="waterType"
          value={this.state.waterType}
          onChange={e => {
            this.setState({waterType: e.target.value });
          }}
        >
          <MenuItem value={"safe"}>Safe</MenuItem>
          <MenuItem value={"unsafe"}>Unsafe</MenuItem>
        </Select>
        </FormControl>
  </Grid>
  <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="fuelType">Fuel for cooking</InputLabel>
        <Select
          id="fuelType"
          value={this.state.fuelType}
          onChange={e => {
            this.setState({fuelType: e.target.value });
          }}
        >
          <MenuItem value={"clean_lpg"}>Clean LPG</MenuItem>
          <MenuItem value={"unclean_cowdung"}>Unclean cowdung</MenuItem>
        </Select>
        </FormControl>
  </Grid>
  <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="fuelType">Sanitation</InputLabel>
        <Select
          id="fuelType"
          value={this.state.sanitation}
          onChange={e => {
            this.setState({sanitation: e.target.value });
          }}
        >
          <MenuItem value={"toilet"}>Toilet</MenuItem>
          <MenuItem value={"no_toilet"}>No toilet</MenuItem>
        </Select>
        </FormControl>
  </Grid>
  <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="ifComputer">Computer</InputLabel>
        <Select
          id="ifComputer"
          value={this.state.ifComputer}
          onChange={e => {
            this.setState({ifComputer: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
  </Grid>

  <Grid item xs={12} sm={12} style={{margin:"1em"}}>
    <hr/>
  </Grid>

  <Grid item xs={6} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectDiabetes">Do you have diabetes?</InputLabel>
        <Select
          id="selectDiabetes"
          value={this.state.ifDiabetes}
         onChange={e => {
            this.setState({ifDiabetes: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>

    <Grid item xs={12} sm={6}>
          <TextField style={{marginRight:"1em"}}
            id="lastBloodSugarLevel"
            label="Last Blood Sugar Level"
            fullWidth
            defaultValue = {this.state.lastBloodSugarLevel}
            onBlur={e => {
              this.setState({ lastBloodSugarLevel: e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField style={{marginRight:"1em"}}
            id="fastingBloodSugarLevel"
            label="Fasting Blood Sugar Level"
            fullWidth
            defaultValue = {this.state.lastFastingBloodSugar}
            onBlur={e => {
              this.setState({ lastFastingBloodSugar: e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField style={{marginRight:"1em"}}
            id="lastBloodSugarLevel"
            label="Post Prandial Blood Sugar"
            fullWidth
            defaultValue = {this.state.postPrandialSugar}
            onBlur={e => {
              this.setState({ postPrandialSugar: e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField style={{marginRight:"1em"}}
            id="lastHba1cLevel"
            label="HbA1c Level: Normal 6.5% < Abnormal"
            fullWidth
            defaultValue = {this.state.hba1cLevel}
            onBlur={e => {
              this.setState({ hba1cLevel: e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={4}>
    <FormControl className={classes.formControlShort}>
        <InputLabel id="selectBp">Do you have BP (Hypertension)?</InputLabel>
        <Select
          value={this.state.ifBp}
          onChange={e => {
            this.setState({ifBp: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
    </FormControl>

    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField style={{marginRight:"1em"}}
            id="valueOfBp"
            label="Value Of BP"
            fullWidth
            defaultValue = {this.state.valueOfBp}
            onBlur={e => {
              this.setState({valueOfBp : e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField style={{marginRight:"1em"}}
            id="noOfMonthsBP"
            label="BP for how many months?"
            fullWidth
            defaultValue = {this.state.noOfMonthsBp}
            onBlur={e => {
              this.setState({noOfMonthsBp: e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={6}>
    <FormControl className={classes.formControl}>
        <InputLabel id="selectAlcohol">Alcoholic drink in the last 30 days</InputLabel>
        <Select
          value={this.state.ifAlcohol}
          onChange={e => {
            this.setState({ifAlcohol: e.target.value });
          }}
        >
          <MenuItem value={"never"}>Never</MenuItem>
          <MenuItem value={"stopped_after_operation"}>Stopped after operation</MenuItem>
          <MenuItem value={"daily"}>Daily</MenuItem>
          <MenuItem value={"rarely"}>Rarely</MenuItem>
        </Select>
    </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
    <FormControl className={classes.formControl}>
        <InputLabel id="selectAlcohol">Tobacco Smoking Status</InputLabel>
        <Select
          value={this.state.tobaccoSmokingStatus}
          onChange={e => {
            this.setState({tobaccoSmokingStatus: e.target.value });
          }}
        >
          <MenuItem value={"never"}>Never</MenuItem>
          <MenuItem value={"stopped_after_operation"}>Stopped after operation</MenuItem>
          <MenuItem value={"daily"}>Daily</MenuItem>
          <MenuItem value={"rarely"}>Rarely</MenuItem>
        </Select>
    </FormControl>
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField style={{marginRight:"1em"}}
            label="Bidi Frequency per day"
            fullWidth
            defaultValue = {this.state.bidiFrequency}
            onBlur={e => {
              this.setState({bidiFrequency: e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField style={{marginRight:"1em"}}
            label="Ciggarette Frequency per day"
            fullWidth
            defaultValue = {this.state.cigaretteFrequency}
            onBlur={e => {
              this.setState({cigaretteFrequency: e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField style={{marginRight:"1em"}}
            label="Frequency of chewing tobacco"
            fullWidth
            defaultValue = {this.state.tobaccoFrequency}
            onBlur={e => {
              this.setState({tobaccoFrequency: e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={12}>
          <TextField style={{marginRight:"1em"}}
            label="Any substance abuse"
            fullWidth
            defaultValue = {this.state.substanceAbuse}
            onBlur={e => {
              this.setState({substanceAbuse: e.target.value });
            }}
          />
    </Grid>
    <Grid item xs={12} sm={12}>
    <Typography variant="h5" align="center">
          Current Drug Use
    </Typography> 
    </Grid>

    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectEcosprine">Ecosprine</InputLabel>
        <Select
          id="selectEcosprine"
          value={this.state.ecosprineSelect}
          onChange={e => {
            this.setState({ecosprineSelect: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectRca">Dose</InputLabel>
        <Select
          id="selectEcosprineDose"
          value={this.state.ecosprineDose}
          onChange={e => {
            this.setState({ecosprineDose: e.target.value });
          }}
        >
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={75}>75</MenuItem>
          <MenuItem value={325}>150</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectEcosprineFrequency">Frequency</InputLabel>
        <Select
          id="selectEcosprineFrequency"
          value={this.state.ecosprineFrequency}
          onChange={e => {
            this.setState({ecosprineFrequency: e.target.value });
          }}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>

   <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectClopidogrel">Clopidogrel</InputLabel>
        <Select
          id="selectClopidogrel"
          value={this.state.clopidogrelSelect}
          onChange={e => {
            this.setState({clopidogrelSelect: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectClopidogrelDose">Dose</InputLabel>
        <Select
          id="selectClopidogrelDose"
          value={this.state.clopidogrelDose}
          onChange={e => {
            this.setState({clopidogrelDose: e.target.value });
          }}
        >
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={75}>75</MenuItem>
          <MenuItem value={325}>150</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectClopidogrelFrequency">Frequency</InputLabel>
        <Select
          id="selectClopidogrelFrequency"
          value={this.state.clopidogrelFrequency}
          onChange={e => {
            this.setState({clopidogrelFrequency: e.target.value });
          }}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>
   <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectPrasugrel">Prasugrel</InputLabel>
        <Select
          id="selectPrasugrel"
          value={this.state.prasugrelSelect}
          onChange={e => {
            this.setState({prasugrelSelect: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={6} sm={4}>
          <TextField
            id="prasugrelDose"
            label="Dose"
            defaultValue={this.state.prasugrelDose}
            onBlur={e => {
              this.setState({prasugrelDose: e.target.value });
            }}
            fullWidth
          />
    </Grid>

  <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectPrasugrelFrequency">Frequency</InputLabel>
        <Select
          id="selectPrasugrelFrequency"
          value={this.state.prasugrelFrequency}
          onChange={e => {
            this.setState({prasugrelFrequency: e.target.value });
          }}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>

   <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectStatins">Statins</InputLabel>
        <Select
          id="selectStatins"
          value={this.state.statinsSelect}
          onChange={e => {
            this.setState({statinsSelect: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={4}>
          <TextField
            id="selectStatinsDose"
            label="Dose"
            defaultValue={this.state.selectStatinsDose}
            onBlur={e => {
              this.setState({selectStatinsDose: e.target.value });
            }}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectStatinsFrequency">Frequency</InputLabel>
        <Select
          id="selectStatinsFrequency"
          value={this.state.statinsFrequency}
          onChange={e => {
            this.setState({statinsFrequency: e.target.value });
          }}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>

   <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectAceInhibitors">Ace - Inhibitors</InputLabel>
        <Select
          id="selectAceInhibitors"
          value={this.state.aceInhibitorsSelect}
          onChange={e => {
            this.setState({aceInhibitorsSelect: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={4}>
          <TextField
            id="selectAceInhibitorsDose"
            label="Dose"
            defaultValue={this.state.selectAceInhibitorsDose}
            onBlur={e => {
              this.setState({selectAceInhibitorsDose: e.target.value });
            }}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectAceInhibitorsFrequency">Frequency</InputLabel>
        <Select
          id="selectAceInhibitorsFrequency"
          value={this.state.aceInhibitorsFrequency}
          onChange={e => {
            this.setState({aceInhibitorsFrequency: e.target.value });
          }}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>
   <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectAntiAnginal">Antianginal</InputLabel>
        <Select
          id="selectAntiAnginal"
          value={this.state.antiAnginalSelect}
          onChange={e => {
            this.setState({antiAnginalSelect: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={4}>
          <TextField
            id="selectAntiAnginalDose"
            label="Dose"
            defaultValue={this.state.selectAntiAnginalDose}
            onBlur={e => {
              this.setState({selectAntiAnginalDose: e.target.value });
            }}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectAntiAnginalFrequency">Frequency</InputLabel>
        <Select
          id="selectAntiAnginalFrequency"
          value={this.state.antiAnginalFrequency}
          onChange={e => {
            this.setState({antiAnginalFrequency: e.target.value });
          }}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>

   <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectBetaBlockers">Beta Blockers</InputLabel>
        <Select
          id="selectBetaBlockers"
          value={this.state.betaBlockersSelect}
          onChange={e => {
            this.setState({betaBlockersSelect: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={4}>
          <TextField
            id="selectBetaBlockersDose"
            label="Dose"
            defaultValue={this.state.selectBetaBlockersDose}
            onBlur={e => {
              this.setState({selectBetaBlockersDose: e.target.value });
            }}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectBetaBlockersFrequency">Frequency</InputLabel>
        <Select
          id="selectBetaBlockersFrequency"
          value={this.state.betaBlockersFrequency}
          onChange={e => {
            this.setState({betaBlockersFrequency: e.target.value });
          }}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>

   <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectInsulin">Insulin</InputLabel>
        <Select
          id="selectInsulin"
          value={this.state.insulinSelect}
          onChange={e => {
            this.setState({insulinSelect: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={4}>
          <TextField
            id="selectInsulinDose"
            label="Dose"
            defaultValue={this.state.selectInsulinDose}
            onBlur={e => {
              this.setState({selectInsulinDose: e.target.value });
            }}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectInsulinFrequency">Frequency</InputLabel>
        <Select
          id="selectInsulinFrequency"
          value={this.state.insulinFrequency}
          onChange={e => {
            this.setState({insulinFrequency: e.target.value });
          }}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>

   <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectOha">OHA</InputLabel>
        <Select
          id="selectOha"
          value={this.state.ohaSelect}
          onChange={e => {
            this.setState({ohaSelect: e.target.value });
          }}
        >
          <MenuItem value={"Metformin"}>Metformin</MenuItem>
          <MenuItem value={"Gliptin"}>Gliptin</MenuItem>
          <MenuItem value={"Pio"}>Pio</MenuItem>        
          </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={4}>
          <TextField
            id="selectOhaDose"
            label="Dose"
            defaultValue={this.state.selectOhaDose}
            onBlur={e => {
              this.setState({selectOhaDose: e.target.value });
            }}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectOhaFrequency">Frequency</InputLabel>
        <Select
          id="selectOhaFrequency"
          value={this.state.ohaFrequency}
          onChange={e => {
            this.setState({ohaFrequency: e.target.value });
          }}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>


    <Grid item xs={12} sm={12}>
    <Typography variant="h5" align="center">
            Adherence
    </Typography> 
    </Grid>
  
   <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">1. Do you sometimes forget to take your heart pills?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.forgetHeartMedicine}
          onChange={e => {
            this.setState({forgetHeartMedicine: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">2. Over the past two weeks, were there any days when you did not take your heart medicine?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.didNotTakeMedicine}
          onChange={e => {
            this.setState({didNotTakeMedicine: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">3. Have you ever cut back or stopped taking your medication without telling your doctor because you felt worse when you took it?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.stopMedicine}
          onChange={e => {
            this.setState({stopMedicine: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">4. When you travel or leave home, do you sometimes forget to bring along your medications?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.forgetMedicineTravel}
          onChange={e => {
            this.setState({forgetMedicineTravel: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">5. Did you take your medicine yesterday?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.yesterdayMedicine}
          onChange={e => {
            this.setState({yesterdayMedicine: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">6. When you feel alright, do you sometimes stop taking your medicine?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.stopMedicineWhenAlright}
          onChange={e => {
            this.setState({stopMedicineWhenAlright: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">7. Taking medication everyday is a real inconvenience for some people. Do you ever feel hassled about sticking to your treatement plan?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.stickingToPlan}
          onChange={e => {
            this.setState({stickingToPlan: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">8. How often do you have difficulty remembering to take all your medication?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.difficultyRemembering}
          onChange={e => {
            this.setState({difficultyRemembering: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">9. Did you get medicine from hospital where your ptca done?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.gotMedicine}
          onChange={e => {
            this.setState({gotMedicine: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">If yes, did you get it free of cost?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.ifGotFree}
          onChange={e => {
            this.setState({ifGotFree: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">If no, prescribed drugs are easily available at the pharmacy?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.isEasilyAvailable}
          onChange={e => {
            this.setState({isEasilyAvailable: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">If yes, are you able to afford the required medicines?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.ifAffordable}
          onChange={e => {
            this.setState({ifAffordable: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
   <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">Is the pharmacy dispensary close to your home?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.isDispensaryClose}
          onChange={e => {
            this.setState({isDispensaryClose: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">Designated pharmacy centres?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.ifPharmacyDesignated}
          onChange={e => {
            this.setState({ifPharmacyDesignated: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
   <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">Informed through an sms or an automated call?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.ifInformedThroughCall}
          onChange={e => {
            this.setState({ifInformedThroughCall: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
   <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControlLarge}>
        <InputLabel id="selectQuestions">Send an SMS or call when your supply is finished?</InputLabel>
        <Select
          id="selectQuestions"
          value={this.state.ifSmsSent}
          onChange={e => {
            this.setState({ifSmsSent: e.target.value });
          }}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>

    <Grid item xs={12} sm={12}>
    <Typography variant="h5" align="center">
      Side Effects
    </Typography> 
    </Grid>
    
  <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestion">Dyspepsia stomach pain</InputLabel>
        <Select
          id="selectQuestion"
          value={this.state.sideEffectZero}
          onChange={e => {
            this.setState({sideEffectZero: e.target.value });
          }}
        >
          <MenuItem value={0}>0 - I do not have this symptom</MenuItem>
          <MenuItem value={1}>1 - It does not bother me</MenuItem>
          <MenuItem value={2}>2 - it bothers me a little</MenuItem>
          <MenuItem value={3}>3 - it bothers me a lot</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestion">Feeling dizzy/lightheaded/headaches</InputLabel>
        <Select
          id="selectQuestion"
          value={this.state.sideEffectOne}
          onChange={e => {
            this.setState({sideEffectOne: e.target.value });
          }}
        >
          <MenuItem value={0}>0 - I do not have this symptom</MenuItem>
          <MenuItem value={1}>1 - It does not bother me</MenuItem>
          <MenuItem value={2}>2 - it bothers me a little</MenuItem>
          <MenuItem value={3}>3 - it bothers me a lot</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestion">Nausea or vomiting/diarrhea</InputLabel>
        <Select
          id="selectQuestion"
          value={this.state.sideEffectTwo}
          onChange={e => {
            this.setState({sideEffectTwo: e.target.value });
          }}
        >
          <MenuItem value={0}>0 - I do not have this symptom</MenuItem>
          <MenuItem value={1}>1 - It does not bother me</MenuItem>
          <MenuItem value={2}>2 - it bothers me a little</MenuItem>
          <MenuItem value={3}>3 - it bothers me a lot</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestion">Difficulty in breathing,chest tightness</InputLabel>
        <Select
          id="selectQuestion"
          value={this.state.sideEffectThree}
          onChange={e => {
            this.setState({sideEffectThree: e.target.value });
          }}
        >
          <MenuItem value={0}>0 - I do not have this symptom</MenuItem>
          <MenuItem value={1}>1 - It does not bother me</MenuItem>
          <MenuItem value={2}>2 - it bothers me a little</MenuItem>
          <MenuItem value={3}>3 - it bothers me a lot</MenuItem>
        </Select>
        </FormControl>
   </Grid>
   <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestion">Difficulty in falling or staying asleep</InputLabel>
        <Select
          id="selectQuestion"
          value={this.state.sideEffectFour}
          onChange={e => {
            this.setState({sideEffectFour: e.target.value });
          }}
        >
          <MenuItem value={0}>0 - I do not have this symptom</MenuItem>
          <MenuItem value={1}>1 - It does not bother me</MenuItem>
          <MenuItem value={2}>2 - it bothers me a little</MenuItem>
          <MenuItem value={3}>3 - it bothers me a lot</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestion">Skin rashes/deep purple/bluebruises</InputLabel>
        <Select
          id="selectQuestion"
          value={this.state.sideEffectFive}
          onChange={e => {
            this.setState({sideEffectFive: e.target.value });
          }}
        >
          <MenuItem value={0}>0 - I do not have this symptom</MenuItem>
          <MenuItem value={1}>1 - It does not bother me</MenuItem>
          <MenuItem value={2}>2 - it bothers me a little</MenuItem>
          <MenuItem value={3}>3 - it bothers me a lot</MenuItem>
        </Select>
        </FormControl>
   </Grid>
   <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestion">Seizures,depression,anxiety</InputLabel>
        <Select
          id="selectQuestion"
          value={this.state.sideEffectSix}
          onChange={e => {
            this.setState({sideEffectSix: e.target.value });
          }}
        >
          <MenuItem value={0}>0 - I do not have this symptom</MenuItem>
          <MenuItem value={1}>1 - It does not bother me</MenuItem>
          <MenuItem value={2}>2 - it bothers me a little</MenuItem>
          <MenuItem value={3}>3 - it bothers me a lot</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestion">Difficulty in micturition</InputLabel>
        <Select
          id="selectQuestion"
          value={this.state.sideEffectSeven}
          onChange={e => {
            this.setState({sideEffectSeven: e.target.value });
          }}
        >
          <MenuItem value={0}>0 - I do not have this symptom</MenuItem>
          <MenuItem value={1}>1 - It does not bother me</MenuItem>
          <MenuItem value={2}>2 - it bothers me a little</MenuItem>
          <MenuItem value={3}>3 - it bothers me a lot</MenuItem>
        </Select>
        </FormControl>
   </Grid>
  <Grid item xs={12} sm={12}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectQuestion">Arthralgias/backpain</InputLabel>
        <Select
          id="selectQuestion"
          value={this.state.sideEffectEight}
          onChange={e => {
            this.setState({sideEffectEight: e.target.value });
          }}
        >
          <MenuItem value={0}>0 - I do not have this symptom</MenuItem>
          <MenuItem value={1}>1 - It does not bother me</MenuItem>
          <MenuItem value={2}>2 - it bothers me a little</MenuItem>
          <MenuItem value={3}>3 - it bothers me a lot</MenuItem>
        </Select>
        </FormControl>
   </Grid>
   <Grid item xs={12} sm={12}>
    <Typography variant="h5" align="center">
      Followup
    </Typography> 
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectLipidProfile">Have you had a lipid profile done?</InputLabel>
        <Select
          id="selectLipidProfile"
          value={this.state.selectLipidProfile}
          onChange={e => {
            this.setState({selectLipidProfile: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectLipidProfile">Did you have chest pain after the procedure?</InputLabel>
        <Select
          id="selectLipidProfile"
          value={this.state.selectLipidProfilePain}
          onChange={e => {
            this.setState({selectLipidProfilePain: e.target.value });
          }}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
   <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectPainDegree">If yes, degree of chest pain(scale of 1-10)</InputLabel>
        <Select
          id="selectPainDegree"
          value={this.state.selectPainDegree}
          onChange={e => {
            this.setState({selectPainDegree: e.target.value });
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12}>
    <Typography variant="h5" align="center">
      Seattle angina questionaires
    </Typography> 
    </Grid>

    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectDressing">Dressing Yourself</InputLabel>
        <Select
          id="selectDressing"
          value={this.state.selectDressing}
          onChange={e => {
            this.setState({selectDressing: e.target.value });
            console.log(this.state.selectDressing)
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectIndoors">Walking indoors on level ground</InputLabel>
        <Select
          id="selectIndoors"
          value={this.state.selectIndoors}
          onChange={e => {
            this.setState({selectIndoors: e.target.value });
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectShowering">Showering</InputLabel>
        <Select
          id="selectShowering"
          value={this.state.selectShowering}
          onChange={e => {
            this.setState({selectShowering: e.target.value });
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectGardening">Gardening, vacuuming</InputLabel>
        <Select
          value={this.state.selectGardening}
          onChange={e => {
            this.setState({selectGardening: e.target.value });
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectGroceries">Carrying groceries</InputLabel>
        <Select
          value={this.state.selectGroceries}
          onChange={e => {
            this.setState({selectGroceries: e.target.value });
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectBrisk">Walking more than a block at a brisk pace</InputLabel>
        <Select
          value={this.state.selectBrisk}
          onChange={e => {
            this.setState({selectBrisk: e.target.value });
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectHill">Climbing a hill or a flight of stairs without stopping</InputLabel>
        <Select
          value={this.state.selectHill}
          onChange={e => {
            this.setState({selectHill: e.target.value });
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectHeavy">Lifting or moving heavy objects(eg.Furniture, children)</InputLabel>
        <Select
          value={this.state.selectHeavy}
          onChange={e => {
            this.setState({selectHeavy: e.target.value });
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectSports">Participating in strenous sports(Eg. Swimming, tennis)</InputLabel>
        <Select
          value={this.state.selectSports}
          onChange={e => {
            this.setState({selectSports: e.target.value });
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectRunning">Running or jogging</InputLabel>
        <Select
          value={this.state.selectRunning}
          onChange={e => {
            this.setState({selectRunning: e.target.value });
          }}
        >
          <MenuItem value={1}>1-Moderately Limited</MenuItem>
          <MenuItem value={2}>2-Somewhat Limited</MenuItem>
          <MenuItem value={3}>3-A little limited</MenuItem>
          <MenuItem value={4}>4-Somewhat Limited</MenuItem>
          <MenuItem value={5}>5-Limited or didn't for another reasons</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={12} align="center">
    <Button
      variant="contained"
      color="primary"
      className={classes.button}>Save Details</Button>
      </Grid>














      </Grid>
      </React.Fragment>

    );
  }
}
export default withStyles(styles)(SurveyFormComponent);