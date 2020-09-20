import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import DateInputField from '../../common/DateInputField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Delivery to Workers', 'Repackage', 'Delivery to Destination'];
}

function getStepContent(step, startDate, setStartDate) {
  switch (step) {
    case 0:
      return <DateInputField
                label="Start Date"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)} />
    case 1:
      return <DateInputField
                label="Start Date"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)} />
    case 2:
      return <DateInputField
                label="Start Date"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)} />
    default:
      return 'Unknown step';
  }
}

export default function Timeframe({ startDate, setStartDate }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <h1>Set up timeframe for this task</h1>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index, startDate, setStartDate)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All dates selected - Click 'Next' button to continue</Typography>
        </Paper>
      )}
    </div>
  );
}