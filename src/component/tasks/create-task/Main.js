import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';

import axios from '../../../axios';
import AddInformation from './AddInformation';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    width: '45%',
    marginRight: '1rem',
    marginTop: '1rem',
    marginBottom: '3rem'
  },
  nextButton: {
    width: '45%',
    marginTop: '1rem',
    marginBottom: '3rem'
  }
}));

function getSteps() {
  return ['Add information', 'Scan QR Codes', 'Select Worker'];
}

export default function Main() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const history = useHistory();

    const onSubmit = async () => {
        try{
            const taskData = { title, description, detail, destination, startDate }
            await axios.post('/task/create', taskData);

            history.push('/task/main');
        } catch(err){
            console.error(err);
        }
    }

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <AddInformation
                  title={title}
                  setTitle={setTitle}
                  description={description}
                  setDescription={setDescription}
                  detail={detail}
                  setDetail={setDetail}
                  destination={destination}
                  setDestination={setDestination}
                  startDate={startDate}
                  setStartDate={setStartDate} />;
      case 1:
        return 'Scan QR Codes';
      case 2:
        return 'Select Worker';
      default:
        return 'Page not found';
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>Review</Typography>

            <Button onClick={handleBack}>Back</Button>
            <Button onClick={() => onSubmit()} variant="contained">
              Create
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button className={classes.nextButton} variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}