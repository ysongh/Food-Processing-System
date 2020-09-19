import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';

import axios from '../../../axios';
import AddInformation from './AddInformation';
import AddBarcodes from './AddBarcodes';
import SelectUnites from './SelectUnites';
import SelectWorkers from './SelectWorkers';
import AssignUnits from './AssignUnits';
import Review from './Review';
import ScanGLN from './ScanGLN';

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
  return [1, 2, 3, 4, 5];
}

export default function Main() {
  const classes = useStyles();
  const history = useHistory();

  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gln, setGLN] = useState("");
  const [detail, setDetail] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [workerIds, setWorkerIds] = useState([]);
  const [workerList, setWorkerList] = useState([]);
  const [go] = useState(true);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  
  useEffect(() => {
    async function getWorkers() {
        try{
            const { data } = await axios.get('/user/workers');
            
            setWorkerList(data.data);
        } catch(err){
            console.error(err);
        }
    }
    
    getWorkers();
}, [go]);

  const onSubmit = async () => {
    try{
        const taskData = { title, description, detail, destination, startDate, workers: workerIds }
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
                  startDate={startDate}
                  setStartDate={setStartDate} />;
      case 1:
        return <AddBarcodes gln={gln} setGLN={setGLN} setActiveStep={setActiveStep} />;
      case 2:
        return <SelectUnites gln={gln} destination={destination} />;
      case 3:
        return <SelectWorkers workerList={workerList} workerIds={workerIds} setWorkerIds={setWorkerIds} />;
      case 4:
        return <AssignUnits workerIds={workerIds} setWorkerIds={setWorkerIds} />
      case 10:
        return <ScanGLN setActiveStep={setActiveStep} setGLN={setGLN} setDestination={setDestination}/>
      default:
        return 'Page not found';
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Review
              title={title}
              description={description}
              detail={detail}
              destination={destination}
              startDate={startDate}
              workerIds={workerIds} />

            <Button className={classes.backButton} onClick={handleBack}>Back</Button>
            <Button className={classes.nextButton} onClick={() => onSubmit()} variant="contained">
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
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}