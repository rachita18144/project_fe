import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from "axios";
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  formControlShort:{
    margin: theme.spacing(1),
    minWidth: 160,
  },
  formControlFullWidth: {
    margin: theme.spacing(1),
    minWidth: 400,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  button: {
    margin: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function FormOComponent() {
  const classes = useStyles();
  //************************** Checkbox states *********************************/
  const [riskFactors, setRiskFactors] = React.useState({
    checkHtn:false,
    checkDiabetes: false,
    checkFamilyhx: false,
    checkSmoking: false,
    checkCopd: false,
    checkPastHistory: false,
  });

  const handleChange = name => event => {
    setRiskFactors({ ...riskFactors, [name]: event.target.checked });
    console.log(riskFactors.checkDiabetes)
  };

  const [ecg, setEcg] = React.useState({
    checkAccutemi: false,
    checkAccuteAcs: false,
    checkStChanges: false,
    checkedNonSpecific: false,
  });

  const handleEcgChange = name => event => {
    setEcg({ ...ecg, [name]: event.target.checked });
  };


  const [history, setHistory] = React.useState('');
  const [historyComments, setHistoryComments] = React.useState('');
  const [thrombusSeen, setThrombusSeen] = React.useState('');
  const [thrombusAspiration, setThrombusAspiration] = React.useState('');
  const [numOfVessels, setNumOfVessels] = React.useState('');
  const [stentInLad, setStentInLad] = React.useState('');
  const [stentInLcx, setStentInLcx] = React.useState('');
  const [stentInRca, setStentInRca] = React.useState('');
  const [predialatationBallon, setPredialatationBallon] = React.useState('');
  const [predialatationBallonLcx, setPredialatationBallonLcx] = React.useState('');
  const [predialatationBallonRca, setPredialatationBallonRca] = React.useState('');
  const [ecosprineSelect, setEcosprineSelect] = React.useState('');
  const [ecosprineDose, setEcosprineDose] = React.useState('');
  const [ecosprineFrequency, setEcosprineFrequency] = React.useState('');
  const [clopidogrelSelect, setClopidogrelSelect] = React.useState('');
  const [clopidogrelDose, setClopidogrelDose] = React.useState('');
  const [clopidogrelFrequency, setClopidogrelFrequency] = React.useState('');
  const [prasugrelSelect, setPrasugrelSelect] = React.useState('');
  const [prasugrelDose, setPrasugrelDose] = React.useState('');
  const [prasugrelFrequency, setPrasugrelFrequency] = React.useState('');
  const [statinsSelect, setStatinsSelect] = React.useState('');
  const [statinsDose, setStatinsDose] = React.useState('');
  const [statinsFrequency, setStatinsFrequency] = React.useState('');
  const [aceInhibitorsSelect, setAceInhibitorsSelect] = React.useState('');
  const [aceInhibitorsDose, setAceInhibitorsDose] = React.useState('');
  const [aceInhibitorsFrequency, setAceInhibitorsFrequency] = React.useState('');
  const [antiAnginalSelect, setAntiAnginalSelect] = React.useState('');
  const [antiAnginalDose, setAntiAnginalDose] = React.useState('');
  const [antiAnginalFrequency, setAntiAnginalFrequency] = React.useState('');
  const [betaBlockersSelect, setBetaBlockersSelect] = React.useState('');
  const [betaBlockersDose, setBetaBlockersDose] = React.useState('');
  const [betaBlockersFrequency, setBetaBlockersFrequency] = React.useState('');
  const [insulinSelect, setInsulinSelect] = React.useState('');
  const [insulinDose, setInsulinDose] = React.useState('');
  const [insulinFrequency, setInsulinFrequency] = React.useState('');
  const [ohaSelect, setOhaSelect] = React.useState('');
  const [ohaDose, setOhaDose] = React.useState('');
  const [ohaFrequency, setOhaFrequency] = React.useState('');




  const [caseNumber, setCaseNumber] = React.useState();
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [dateAdmission, setDateAdmission] = React.useState('');
  const [datePtca, setDatePtca] = React.useState('');
  const [dateDischarge, setDateDischarge] = React.useState('');
  const [doctorName, setDoctorName] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [ptcaHospital, setptcaHospital] = React.useState('');
  const [bloodPressure, setBloodPressure] = React.useState('');
  const [bloodSugar, setBloodSugar] = React.useState('');
  const [ldl, setLdl] = React.useState('');
  const [cholesterol, setCholesterol] = React.useState('');
  const [lvef, setLvef] = React.useState('');
  const [tg, setTg] = React.useState('');
  const [serum, setSerum] = React.useState('');
  const [hb, setHb] = React.useState('');
  const [platelets, setPlatelets] = React.useState('');
  const [echoComments, setEchoComments] = React.useState('');
  const [cagcomments, setCagComments] = React.useState('');
  const [ladWidth, setLadWidth] = React.useState('');
  const [ladLength, setLadLength] = React.useState('');
  const [ladAtmos, setLadAtmos] = React.useState('');
  const [ladNumberStents, setLadNumStents] = React.useState('');
  const [ladNameStent, setLadStentName] = React.useState('');
  const [ladWidthStent, setLadWidthStent] = React.useState('');
  const [ladLengthStent, setLadLengthStent] = React.useState('');
  const [ladAtmosStent, setLadAtmosStent] = React.useState('');
  const [ladWidthDistal, setLadWidthDistal] = React.useState('');
  const [ladWidthProximal, setladWidthProximal] = React.useState('');
  const [ladLengthProximal, setladLengthProximal] = React.useState('');
  const [ladAtmosProximal, setladAtmosProximal] = React.useState('');
  const [ladWidthSite, setladWidthSite] = React.useState('');
  const [ladLengthSite, setladLengthSite] = React.useState('');
  const [ladAtmosDistal, setladAtmosDistal] = React.useState('');
  const [ladAtmosSite, setladAtmosSite] = React.useState('');
  const [ladWidthStentBaloon, setladWidthStent] = React.useState('');
  const [ladLengthStentBaloon, setladLengthStent] = React.useState('');
  const [ladAtmosStentBaloon, setladAtmosStent] = React.useState('');
  const [ladLengthDistal, setladLengthDistal] = React.useState('');
  const [lcxwidth, setlcxwidth] = React.useState('');
  const [lcxlength, setlcxlength] = React.useState('');
  const [lcxatmosphere, setlcxatmosphere] = React.useState('');
  const [lcxNumberStents, setlcxNumberStents] = React.useState('');
  const [lcxNameStents, setlcxNameStents] = React.useState('');
  const [lcxWidthStent, setlcxWidthStent] = React.useState('');
  const [lcxLengthStent, setlcxLengthStent] = React.useState('');
  const [lcxAtmosStent, setlcxAtmosStent] = React.useState('');
  const [lcxWidthDistal, setlcxWidthDistal] = React.useState('');
  const [lcxLengthDistal, setlcxLengthDistal] = React.useState('');
  const [lcxAtmosDistal, setlcxAtmosDistal] = React.useState('');
  const [lcxWidthProximal, setlcxWidthProximal] = React.useState('');
  const [lcxLengthProximal, setlcxLengthProximal] = React.useState('');
  const [lcxAtmosProximal, setlcxAtmosProximal] = React.useState('');
  const [lcxWidthSite, setlcxWidthSite] = React.useState('');
  const [lcxLengthSite, setlcxLengthSite] = React.useState('');
  const [lcxAtmosSite, setlcxAtmosSite] = React.useState('');
  const [lcxWidthStentBaloon, setlcxWidthStentBaloon] = React.useState('');
  const [lcxLengthStentBaloon, setlcxLengthStentBaloon] = React.useState('');
  const [lcxAtmosStentBaloon, setlcxAtmosStentBaloon] = React.useState('');
  const [rcawidth, setrcawidth] = React.useState('');
  const [rcalength, setrcalength] = React.useState('');
  const [rcaatmosphere, setrcaatmosphere] = React.useState('');
  const [rcaNumberStents, setrcaNumberStents] = React.useState('');
  const [rcaNameStent, setrcaNameStent] = React.useState('');
  const [rcaWidthStent, setrcaWidthStent] = React.useState('');
  const [rcaLengthStent, setrcaLengthStent] = React.useState('');
  const [rcaAtmosStent, setrcaAtmosStent] = React.useState('');
  const [rcaWidthDistal, setrcaWidthDistal] = React.useState('');
  const [rcaLengthDistal, setrcaLengthDistal] = React.useState('');
  const [rcaAtmosDistal, setrcaAtmosDistal] = React.useState('');
  const [rcaWidthProximal, setrcaWidthProximal] = React.useState('');
  const [rcaLengthProximal, setrcaLengthProximal] = React.useState('');
  const [rcaAtmosProximal, setrcaAtmosProximal] = React.useState('');
  const [rcaWidthSite, setrcaWidthSite] = React.useState('');
  const [rcaLengthSite, setrcaLengthSite] = React.useState('');
  const [rcaAtmosSite, setrcaAtmosSite] = React.useState('');
  const [rcaWidthStentBaloon, setrcaWidthStentBaloon] = React.useState('');
  const [rcaLengthStentBaloon, setrcaLengthStentBaloon] = React.useState('');
  const [rcaAtmosStentBaloon, setrcaAtmosStentBaloon] = React.useState('');
  const [renalNumOfStents, setRenalNumOfStents] = React.useState('');
  const [renalNameOfStent, setRenalNameOfStent] = React.useState('');
  const [renalWidth, setRenalWidth] = React.useState('');
  const [renalLength, setRenalLength] = React.useState('');
  const [renalAtmos, setRenalAtmos] = React.useState('');


  const onHistoryChange = event => {
    setHistory(event.target.value);
  };
  const onThrombusSeenChange = event => {
    setThrombusSeen(event.target.value);
  };
  const onThrombusAspirationBlur = event => {
    setThrombusAspiration(event.target.value);
  };
 const onNumVesselsChange = event => {
    setNumOfVessels(event.target.value);
  };
  const onStentInLadChange = event => {
    setStentInLad(event.target.value);
  };
  const onStentInLcxChange = event => {
    setStentInLcx(event.target.value);
  };
  const onStentInRcaChange = event => {
    setStentInRca(event.target.value);
  };
  const onPredialatationBallonBlur = event => {
    setPredialatationBallon(event.target.value);
  };
  const onPredialatationBallonBlurLcx= event => {
    setPredialatationBallonLcx(event.target.value);
  };
  const onPredialatationBallonBlurRca= event => {
    setPredialatationBallonRca(event.target.value);
  };


  const sendOFormDataServer = event => {

    console.log(prasugrelDose)
    axios
    .post(
      "/api/v1//save_oform_details",
      {

      'case_number':caseNumber,
      'mobile':mobileNumber,
      'name_of_patient':name,
      'age':age,
      'amount':amount,
      'address':address,
      //'date_of_admission':dateAdmission,
      //'date_of_ptca':datePtca,
      //'date_of_discharge':dateDischarge,
      'ptca_hospital':ptcaHospital,
      'doctor_name':doctorName,
      'history':history,
      'history_comments':historyComments,
      'risk_factors':{'check_htn':riskFactors.checkHtn, 'check_diabetes':riskFactors.checkDiabetes, 'check_familyhx':riskFactors.checkFamilyhx, 'check_smoking':riskFactors.checkSmoking, 'check_copd':riskFactors.checkCopd, 'check_past_history':riskFactors.checkPastHistory,},
      'investigations': {'blood_pressure':bloodPressure, 'blood_sugar':bloodSugar, 'ldl':ldl, 'cholesterol':cholesterol, 'lvef':lvef, 'tg':tg, 'serum_creatinine':serum,'hb':hb, 'platelets':platelets },
      'ecg':{'check_accutemi':ecg.checkAccutemi, 'check_accute_acs':ecg.checkAccuteAcs, 'check_stchanges':ecg.checkStChanges, 'check_nonspecific':ecg.checkedNonSpecific, },
      'echo_comments':echoComments,
      'cag_report':cagcomments,
      'thrombus_seen':thrombusSeen,
      'thrombus_aspiration_done':thrombusAspiration,
      'number_of_vessels':numOfVessels,
      'stent_in_lad' : {'stent_in_site':stentInLad, 'predialataion_balloon':predialatationBallon, 'width':ladWidth, 'length':ladLength, 'atmosphere':ladAtmos, 'number_of_stents':ladNumberStents, 'name_of_stents':ladNameStent, 'size_of_stent': {'width':ladWidthStent , 'length':ladLengthStent, 'atmosphere':ladAtmosStent,}, 'size_of_distal_stent':{'width':ladWidthDistal , 'length':ladLengthDistal, 'atmosphere':ladAtmosDistal,}, 'size_of_proximal_stent':{'width':ladWidthProximal , 'length':ladLengthProximal, 'atmosphere':ladAtmosProximal,}, 'stent_at_site':{'width':ladWidthSite , 'length':ladLengthSite, 'atmosphere':ladAtmosSite,} , 'post_dialatation_balloon':{'width':ladWidthStentBaloon , 'length':ladLengthStentBaloon, 'atmosphere':ladAtmosStentBaloon,}},
      'stent_in_lcx' : {'stent_in_site':stentInLcx, 'predialataion_balloon':predialatationBallonLcx, 'width':lcxwidth, 'length':lcxlength, 'atmosphere':lcxatmosphere, 'number_of_stents':lcxNumberStents, 'name_of_stents':lcxNameStents, 'size_of_stent': {'width':lcxWidthStent , 'length':lcxLengthStent, 'atmosphere':lcxAtmosStent,}, 'size_of_distal_stent':{'width':lcxWidthDistal , 'length':lcxLengthDistal, 'atmosphere':lcxAtmosDistal,}, 'size_of_proximal_stent':{'width':lcxWidthProximal , 'length':lcxLengthProximal, 'atmosphere':lcxAtmosProximal,}, 'stent_at_site':{'width':lcxWidthSite , 'length':lcxLengthSite, 'atmosphere':lcxAtmosSite,} , 'post_dialatation_balloon':{'width':lcxWidthStentBaloon, 'length':lcxLengthStentBaloon, 'atmosphere':lcxAtmosStentBaloon,}},
      'stent_in_rca' : {'stent_in_site':stentInRca, 'predialataion_balloon':predialatationBallonRca, 'width':rcawidth, 'length':rcalength, 'atmosphere':rcaatmosphere, 'number_of_stents':rcaNumberStents, 'name_of_stents':rcaNameStent, 'size_of_stent': {'width':rcaWidthStent , 'length':rcaLengthStent, 'atmosphere':rcaAtmosStent,}, 'size_of_distal_stent':{'width':rcaWidthDistal , 'length':rcaLengthDistal, 'atmosphere':rcaAtmosDistal,}, 'size_of_proximal_stent':{'width':rcaWidthProximal , 'length':rcaLengthProximal, 'atmosphere':rcaAtmosProximal,}, 'stent_at_site':{'width':rcaWidthSite , 'length':rcaLengthSite, 'atmosphere':rcaAtmosSite,} , 'post_dialatation_balloon':{'width':rcaWidthStentBaloon, 'length':rcaLengthStentBaloon, 'atmosphere':rcaAtmosStentBaloon,}},
      'renal_angoiplasty' : {'number_of_stents':renalNumOfStents, 'name_of_stents':renalNameOfStent, 'width':renalWidth, 'length':renalLength, 'atmosphere':renalAtmos,},
      'ecosprine_drug':{'status':ecosprineSelect, 'dose':ecosprineDose, 'frequency':ecosprineFrequency},
      'clopidogrel_drug':{'status':clopidogrelSelect, 'dose':clopidogrelDose, 'frequency':ecosprineFrequency},
      'prasugrel_drug':{'status':prasugrelSelect, 'dose':prasugrelDose, 'frequency':prasugrelFrequency},
      'statins_drug':{'status':statinsSelect, 'dose':statinsDose, 'frequency':statinsFrequency},
      'ace_inhibitors_drug':{'status':aceInhibitorsSelect, 'dose':aceInhibitorsDose, 'frequency':aceInhibitorsFrequency},
      'antianginal_drug':{'status':antiAnginalSelect, 'dose':antiAnginalDose, 'frequency':antiAnginalFrequency},
      'betablockers_drug':{'status':betaBlockersSelect, 'dose':betaBlockersDose, 'frequency':betaBlockersFrequency},
      'insulin_drug':{'status':insulinSelect, 'dose':insulinDose, 'frequency':insulinFrequency},
      'oha_drug':{'status':ohaSelect, 'dose':ohaDose, 'frequency':ohaFrequency},
      },
    )
    .then(
      response => {
        console.log(response);
        window.location.replace(window.location.origin + "/dashboard")
        //this.onLogin(response.data)
      },
      error => {
        console.log(error);
      }
    );
  };


  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Case Number"
            onBlur={event => setCaseNumber(event.target.value)}
            defaultValue={caseNumber}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobileNumber"
            label="Mobile Number"
            fullWidth
            onBlur={event => setMobileNumber(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            onBlur={event => setName(event.target.value)}
            label="Name Of Patient"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="age"
            label="Age"
            onBlur={event => setAge(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            label="Address"
            onBlur={event => setAddress(event.target.value)}
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="state" name="state" label="Date Of Admission" fullWidth type="date" defaultValue="2017-05-24"
            onBlur={event => setDateAdmission(event.target.value)}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="state" name="state" label="Date Of PTCA" fullWidth type="date" defaultValue="2017-05-24"
          onBlur={event => setDatePtca(event.target.value)}
            />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="zip"
            label="Date Of Discharge"
            type="date" defaultValue="2017-05-24"
            fullWidth
            onBlur={event => setDateDischarge(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="doctor_name"
            label="Doctor Name"
            fullWidth
            onBlur={event => setDoctorName(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="amount"
            label="Amount"
            fullWidth
            onBlur={event => setAmount(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ptcaHospital"
            label="Hospital Where PTCA done"
            fullWidth
            onBlur={event => setptcaHospital(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectHistoryLabel">History</InputLabel>
        <Select
          labelId="history"
          id="history"
          value={history}
          onChange={onHistoryChange}
        >
          <MenuItem value={"Stemi"}>Stemi</MenuItem>
          <MenuItem value={"Unstable angina"}>Unstable angina</MenuItem>
          <MenuItem value={"Chronic Stable Angina"}>Chronic Stable Angina</MenuItem>
          <MenuItem value={"Positive stress test"}>Positive stress test</MenuItem>
          <MenuItem value={"Other(comments)"}>Other(comments)</MenuItem>
        </Select>
        <TextField
            id="historyComments"
            name="historyComments"
            label="Comments"
            onBlur={event => setHistoryComments(event.target.value)}
            fullWidth
          />
      </FormControl>
      </Grid>

        <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Risk Factors
        </Typography>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Htn" value="Htn" checked={riskFactors.checkHtn}
            onChange={handleChange('checkHtn')} />}
            label="Htn"
          />
         <FormControlLabel
            control={<Checkbox color="secondary" name="Diabetes" value="Diabetes" checked={riskFactors.checkDiabetes}
            onChange={handleChange('checkDiabetes')} />}
            label="Diabetes"
          />
         <FormControlLabel
            control={<Checkbox color="secondary" name="Diabetes" value="Family Hx" checked={riskFactors.checkFamilyhx}
            onChange={handleChange('checkFamilyhx')} />}
            label="Family Hx"
          />
         <FormControlLabel
            control={<Checkbox color="secondary" name="Diabetes" value="Smoking/Chewing" checked={riskFactors.checkSmoking}
            onChange={handleChange('checkSmoking')}/>}
            label="Smoking/Chewing"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="Diabetes" value="COPD" checked={riskFactors.checkCopd}
            onChange={handleChange('checkCopd')}/>}
            label="COPD"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="Diabetes" value="Past history of IHD" checked={riskFactors.checkPastHistory}
            onChange={handleChange('checkPastHistory')}/>}
            label="Past history of IHD"
          />
      </FormGroup>
        </Grid>
       <Grid item xs={12}>
        <Typography variant="h6">
          Investigations
        </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="bloodPressure"
            name="bloodPressure"
            label="Blood Pressure"
            onBlur={event => setBloodPressure(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="bloodSugar"
            name="bloodSugar"
            label="Blood Sugar"
            onBlur={event => setBloodSugar(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="ldl"
            name="ldl"
            label="LDL"
            onBlur={event => setLdl(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="cholesterol"
            name="cholesterol"
            label="cholesterol"
            onBlur={event => setCholesterol(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="lvef"
            name="lvef"
            label="LVEF"
            onBlur={event => setLvef(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="tg"
            name="tg"
            label="TG"
            onBlur={event => setTg(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="serum"
            name="serum"
            label="Serum Creatinine"
            onBlur={event => setSerum(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="hb"
            name="hb"
            label="HB"
            onBlur={event => setHb(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="platelets"
            name="platelets"
            label="Platelets"
            onBlur={event => setPlatelets(event.target.value)}
            fullWidth
          />
        </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom >
          ECG
        </Typography>
        </Grid>

      <Grid item xs={12}>
      <FormGroup row>
          <FormControlLabel
            control={<Checkbox color="secondary" name="accutemi" value="Acute MI" checked={ecg.checkAccutemi} onChange={handleEcgChange('checkAccutemi')} />}
            label="Acute MI"
          />
         <FormControlLabel
            control={<Checkbox color="secondary" name="acuteacs" value="Acute ACS" checked={ecg.checkAccuteAcs} onChange={handleEcgChange('checkAccuteAcs')} />}
            label="Acute ACS"
          />
         <FormControlLabel
            control={<Checkbox color="secondary" name="stchanes" value="ST-T changes" checked={ecg.checkStChanges} onChange={handleEcgChange('checkStChanges')}/>}
            label="ST-T changes"
          />
         <FormControlLabel
            control={<Checkbox color="secondary" name="nonspecific" value="Non specific Changes" checked={ecg.checkedNonSpecific} onChange={handleEcgChange('checkedNonSpecific')}/>}
            label="Non specific Changes"
          />
      </FormGroup>
        </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" >
          Echo
        </Typography>
      </Grid>
      <Grid item xs={12}>
          <TextField
            id="echo_comments"
            name="echo_comments"
            label="Comments"
            onBlur={event => setEchoComments(event.target.value)}
            fullWidth
          />
        </Grid>
     <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Type of Vessel Involved
        </Typography>
      </Grid>
    <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          CAG Reports
        </Typography>
          <TextField
            id="cagcomments"
            name="cagcomments"
            label="Comments"
            onBlur={event => setCagComments(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectThrombusSeenLabel">Thrombus Seen</InputLabel>
        <Select
          labelId="selectThrombusSeenLabel"
          id="selectThrombusSeenLabel"
          value={thrombusSeen}
          onChange={onThrombusSeenChange}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>

    <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectThrombusAspirationLabel">Thrombus Aspiration Done</InputLabel>
        <Select
          labelId="selectThrombusAspirationLabel"
          id="selectThrombusAspirationLabel"
          value={thrombusAspiration}
          onChange={onThrombusAspirationBlur}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>

     <Grid item xs={12}>
        <FormControl className={classes.formControlFullWidth}>
        <InputLabel id="selectVessels">Number Of Vessels Involved</InputLabel>
        <Select
          labelId="selectVesselsLabel"
          id="selectVessels"
          value={numOfVessels}
          onChange={onNumVesselsChange}
        >
          <MenuItem value={"One"}>One</MenuItem>
          <MenuItem value={"Two"}>Two</MenuItem>
          <MenuItem value={"Three"}>Three</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          STENT IN LAD
        </Typography>
    </Grid>
     <Grid item xs={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectLad">Stent In LAD</InputLabel>
        <Select
          labelId="selectLad"
          id="selectLad"
          value={stentInLad}
          onChange={onStentInLadChange}
        >
          <MenuItem value={"BMS"}>BMS</MenuItem>
          <MenuItem value={"DES"}>DES</MenuItem>
          <MenuItem value={"Both"}>Both</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectPredialatation">Predialatation Balloon</InputLabel>
        <Select
          labelId="selectPredialatation"
          id="selectPredialatation"
          value={predialatationBallon}
          onChange={onPredialatationBallonBlur}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="ladwidth"
            label="Width"
            onBlur={event => setLadWidth(event.target.value)}
            fullWidth
          />
    </Grid>
     <Grid item xs={12} sm={4}>
          <TextField
            id="ladlength"
            label="Length"
            onBlur={event => setLadLength(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="ladatmosphere"
            label="Atmosphere"
            onBlur={event => setLadAtmos(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={6}>
          <TextField
            id="ladNumberStents"
            label="No of Stents"
            onBlur={event => setLadNumStents(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={6}>
          <TextField
            id="ladNameStent"
            label="Name Of Stent"
            onBlur={event => setLadStentName(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Size of stent
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladWidthStent"
            label="Width"
            onBlur={event => setLadWidthStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladLengthStent"
            label="Length"
            onBlur={event => setLadLengthStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladAtmosStent"
            label="Atmosphere"
            onBlur={event => setLadAtmosStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Size of distal stent
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladWidthDistal"
            label="Width"
            onBlur={event => setLadWidthDistal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladLengthDistal"
            label="Length"
            onBlur={event => setladLengthDistal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladAtmosDistal"
            label="Atmosphere"
            onBlur={event => setladAtmosDistal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Size of proximal stent
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladWidthProximal"
            label="Width"
            onBlur={event => setladWidthProximal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladLengthProximal"
            label="Length"
            onBlur={event => setladLengthProximal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladAtmosProximal"
            label="Atmosphere"
            onBlur={event => setladAtmosProximal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Stent at Site
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladWidthSite"
            label="Width"
            onBlur={event => setladWidthSite(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladLengthSite"
            label="Length"
            fullWidth
            onBlur={event => setladLengthSite(event.target.value)}
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladAtmosSite"
            label="Atmosphere"
            fullWidth
            onBlur={event => setladAtmosSite(event.target.value)}
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
            Post dilatation Balloon
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladWidthStent"
            label="Width"
            onBlur={event => setladWidthStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladLengthStent"
            label="Length"
            onBlur={event => setladLengthStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="ladAtmosStent"
            label="Atmosphere"
            onBlur={event => setladAtmosStent(event.target.value)}
            fullWidth
          />
    </Grid>



    <Grid item xs={12}> 
        <Typography variant="h6" gutterBottom>
          STENT IN LCX
        </Typography>
    </Grid>
    <Grid item xs={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectLcx">Stent In LCX</InputLabel>
        <Select
          labelId="selectLcx"
          id="selectLcx"
          value={stentInLcx}
          onChange={onStentInLcxChange}
        >
          <MenuItem value={"BMS"}>BMS</MenuItem>
          <MenuItem value={"DES"}>DES</MenuItem>
          <MenuItem value={"Both"}>Both</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectPredialatation">Predialatation Balloon</InputLabel>
        <Select
          labelId="selectPredialatation"
          id="selectPredialatation"
          value={predialatationBallonLcx}
          onChange={onPredialatationBallonBlurLcx}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="lcxwidth"
            label="Width"
            onBlur={event => setlcxwidth(event.target.value)}
            fullWidth
          />
    </Grid>
     <Grid item xs={12} sm={4}>
          <TextField
            id="lcxlength"
            label="Length"
            onBlur={event => setlcxlength(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="lcxatmosphere"
            label="Atmosphere"
            onBlur={event => setlcxatmosphere(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={6}>
          <TextField
            id="lcxNumberStents"
            label="No of Stents"
            onBlur={event => setlcxNumberStents(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={6}>
          <TextField
            id="lcxNameStent"
            label="Name Of Stent"
            onBlur={event => setlcxNameStents(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Size of stent
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxWidthStent"
            label="Width"
            onBlur={event => setlcxWidthStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxLengthStent"
            label="Length"
            onBlur={event => setlcxLengthStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxAtmosStent"
            onBlur={event => setlcxAtmosStent(event.target.value)}
            label="Atmosphere"
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Size of distal stent
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxWidthDistal"
            label="Width"
            onBlur={event => setlcxWidthDistal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxLengthDistal"
            label="Length"
            onBlur={event => setlcxLengthDistal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxAtmosDistal"
            label="Atmosphere"
            onBlur={event => setlcxAtmosDistal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Size of proximal stent
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxWidthProximal"
            label="Width"
            onBlur={event => setlcxWidthProximal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxLengthProximal"
            label="Length"
            onBlur={event => setlcxLengthProximal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxAtmosProximal"
            label="Atmosphere"
            onBlur={event => setlcxAtmosProximal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Stent at Site
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxWidthSite"
            label="Width"
            onBlur={event => setlcxWidthSite(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxLengthSite"
            label="Length"
            onBlur={event => setlcxLengthSite(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxAtmosSite"
            label="Atmosphere"
            onBlur={event => setlcxAtmosSite(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
            Post dilatation Balloon
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxWidthStent"
            label="Width"
            onBlur={event => setlcxWidthStentBaloon(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxLengthStent"
            label="Length"
            onBlur={event => setlcxLengthStentBaloon(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="lcxAtmosStentBaloon"
            label="Atmosphere"
            onBlur={event => setlcxAtmosStentBaloon(event.target.value)}
            fullWidth
          />
    </Grid>


    <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          STENT IN RCA
        </Typography>
    </Grid>
    <Grid item xs={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectRca">Stent In RCA</InputLabel>
        <Select
          labelId="selectRca"
          id="selectRca"
          value={stentInRca}
          onChange={onStentInRcaChange}
        >
          <MenuItem value={"BMS"}>BMS</MenuItem>
          <MenuItem value={"DES"}>DES</MenuItem>
          <MenuItem value={"Both"}>Both</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="selectPredialatation">Predialatation Balloon</InputLabel>
        <Select
          labelId="selectPredialatation"
          id="selectPredialatation"
          value={predialatationBallonRca}
          onChange={onPredialatationBallonBlurRca}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="rcawidth"
            label="Width"
            onBlur={event => setrcawidth(event.target.value)}
            fullWidth
          />
    </Grid>
     <Grid item xs={12} sm={4}>
          <TextField
            id="rcalength"
            label="Length"
            onBlur={event => setrcalength(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="rcaatmosphere"
            label="Atmosphere"
            onBlur={event => setrcaatmosphere(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={6}>
          <TextField
            id="rcaNumberStents"
            label="No of Stents"
            onBlur={event => setrcaNumberStents(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={6}>
          <TextField
            id="rcaNameStent"
            label="Name Of Stent"
            onBlur={event => setrcaNameStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Size of stent
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaWidthStent"
            label="Width"
            onBlur={event => setrcaWidthStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaLengthStent"
            label="Length"
            onBlur={event => setrcaLengthStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaAtmosStent"
            label="Atmosphere"
            onBlur={event => setrcaAtmosStent(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Size of distal stent
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaWidthDistal"
            label="Width"
            onBlur={event => setrcaWidthDistal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaLengthDistal"
            label="Length"
            onBlur={event => setrcaLengthDistal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaAtmosDistal"
            label="Atmosphere"
            onBlur={event => setrcaAtmosDistal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Size of proximal stent
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaWidthProximal"
            label="Width"
            onBlur={event => setrcaWidthProximal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaLengthProximal"
            label="Length"
            onBlur={event => setrcaLengthProximal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaAtmosProximal"
            label="Atmosphere"
            onBlur={event => setrcaAtmosProximal(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Stent at Site
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaWidthSite"
            label="Width"
            onBlur={event => setrcaWidthSite(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaLengthSite"
            label="Length"
            onBlur={event => setrcaLengthSite(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaAtmosSite"
            label="Atmosphere"
            onBlur={event => setrcaAtmosSite(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
            Post dilatation Balloon
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaWidthStent"
            label="Width"
            onBlur={event => setrcaWidthStentBaloon(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaLengthStent"
            label="Length"
            onBlur={event => setrcaLengthStentBaloon(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={3}>
          <TextField
            id="rcaAtmosStent"
            label="Atmosphere"
            onBlur={event => setrcaAtmosStentBaloon(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
            Renal Angioplasty
        </Typography>
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="renalNumber"
            label="No. of stent"
            onBlur={event => setRenalNumOfStents(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="renalName"
            label="Name of stent"
            onBlur={event => setRenalNameOfStent(event.target.value)}
            fullWidth
          />
    </Grid>
     <Grid item xs={12} sm={4}>
          <TextField
            id="renalWidth"
            label="Width"
            onBlur={event => setRenalWidth(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="renalLength"
            label="Length"
            onBlur={event => setRenalLength(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={12} sm={4}>
          <TextField
            id="renalAtmos"
            label="Atmosphere"
            onBlur={event => setRenalAtmos(event.target.value)}
            fullWidth
          />
    </Grid>

    <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
            Drugs
        </Typography>
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectEcosprine">Ecosprine</InputLabel>
        <Select
          id="selectEcosprine"
          value={ecosprineSelect}
          onChange={event => setEcosprineSelect(event.target.value)}
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
          value={ecosprineDose}
          onChange={event => setEcosprineDose(event.target.value)}
        >
          <MenuItem value={"50"}>50</MenuItem>
          <MenuItem value={"75"}>75</MenuItem>
          <MenuItem value={"325"}>150</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectEcosprineFrequency">Frequency</InputLabel>
        <Select
          id="selectEcosprineFrequency"
          value={ecosprineFrequency}
          onChange={event => setEcosprineFrequency(event.target.value)}
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
          value={clopidogrelSelect}
          onChange={event => setClopidogrelSelect(event.target.value)}
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
          value={clopidogrelDose}
          onChange={event => setClopidogrelDose(event.target.value)}
        >
          <MenuItem value={"50"}>50</MenuItem>
          <MenuItem value={"75"}>75</MenuItem>
          <MenuItem value={"325"}>150</MenuItem>
        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectClopidogrelFrequency">Frequency</InputLabel>
        <Select
          id="selectClopidogrelFrequency"
          value={clopidogrelFrequency}
          onChange={event => setClopidogrelFrequency(event.target.value)}
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
          value={prasugrelSelect}
          onChange={event => setPrasugrelSelect(event.target.value)}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
    </Grid>
    <Grid item xs={6} sm={4}>
          <TextField
            id="selectPrasugrelDose"
            label="Dose"
            onBlur={event => setPrasugrelDose(event.target.value)}
            fullWidth
          />
    </Grid>

  <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectPrasugrelFrequency">Frequency</InputLabel>
        <Select
          id="selectPrasugrelFrequency"
          value={prasugrelFrequency}
          onChange={event => setPrasugrelFrequency(event.target.value)}
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
          value={statinsSelect}
          onChange={event => setStatinsSelect(event.target.value)}
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
            onBlur={event => setStatinsDose(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectStatinsFrequency">Frequency</InputLabel>
        <Select
          id="selectStatinsFrequency"
          value={statinsFrequency}
          onChange={event => setStatinsFrequency(event.target.value)}
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
          value={aceInhibitorsSelect}
          onChange={event => setAceInhibitorsSelect(event.target.value)}
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
            onBlur={event => setAceInhibitorsDose(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectAceInhibitorsFrequency">Frequency</InputLabel>
        <Select
          id="selectAceInhibitorsFrequency"
          value={aceInhibitorsFrequency}
          onChange={event => setAceInhibitorsFrequency(event.target.value)}
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
          value={antiAnginalSelect}
          onChange={event => setAntiAnginalSelect(event.target.value)}
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
            onBlur={event => setAntiAnginalDose(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectAntiAnginalFrequency">Frequency</InputLabel>
        <Select
          id="selectAntiAnginalFrequency"
          value={antiAnginalFrequency}
          onChange={event => setAntiAnginalFrequency(event.target.value)}
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
          value={betaBlockersSelect}
          onChange={event => setBetaBlockersSelect(event.target.value)}
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
            onBlur={event => setBetaBlockersDose(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectBetaBlockersFrequency">Frequency</InputLabel>
        <Select
          id="selectBetaBlockersFrequency"
          value={betaBlockersFrequency}
          onChange={event => setBetaBlockersFrequency(event.target.value)}
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
          value={insulinSelect}
          onChange={event => setInsulinSelect(event.target.value)}
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
            onBlur={event => setInsulinDose(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectInsulinFrequency">Frequency</InputLabel>
        <Select
          id="selectInsulinFrequency"
          value={insulinFrequency}
          onChange={event => setInsulinFrequency(event.target.value)}
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
          value={ohaSelect}
          onChange={event => setOhaSelect(event.target.value)}
        >
          <MenuItem value={"Metformin"}>Metformin</MenuItem>
          <MenuItem value={"Gliptin"}>Gliptin</MenuItem>
          <MenuItem value={"Pio"}>Pio</MenuItem>        </Select>
        </FormControl>
    </Grid>
  <Grid item xs={12} sm={4}>
          <TextField
            id="selectOhaDose"
            label="Dose"
            onBlur={event => setOhaDose(event.target.value)}
            fullWidth
          />
    </Grid>
    <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControlShort}>
        <InputLabel id="selectOhaFrequency">Frequency</InputLabel>
        <Select
          id="selectOhaFrequency"
          value={ohaFrequency}
          onChange={event => setOhaFrequency(event.target.value)}
        >
          <MenuItem value={"OD"}>OD</MenuItem>
          <MenuItem value={"BD"}>BD</MenuItem>
        </Select>
        </FormControl>
   </Grid>
   <Grid item xs={12} sm={12} align="center">

    <Button
      variant="contained"
      color="primary"
      onClick={sendOFormDataServer}
      className={classes.button}>Save Details</Button>
    </Grid>

    </Grid>
    </React.Fragment>
  );
}