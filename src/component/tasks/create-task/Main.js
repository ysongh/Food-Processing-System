import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';

import { GlobalContext } from '../../../context/GlobalState';
import axios from '../../../axios';
import AddInformation from './AddInformation';
import AddBarcodes from './AddBarcodes';
import SelectUnites from './SelectUnites';
import SelectWorkers from './SelectWorkers';
import AssignUnits from './AssignUnits';
import Timeframe from './Timeframe';
import Destination from './Destination';
import Review from './Review';
import ScanGLN from './ScanGLN';
import ScanGTIN from './ScanGTIN';

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
  return [1, 2, 3, 4, 5, 6, 7];
}

export default function Main() {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useContext(GlobalContext);

  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gln, setGLN] = useState("");
  const [gtin, setGTIN] = useState("");
  const [unit, setUnit] = useState(0);
  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState("");
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
        const detail = `${unit} units of item package (GTIN: ${gtin}) from ${location} (GLN: ${gln})`;

        const taskData = { title, description, detail, destination, startDate, workers: workerIds, gtin, ownerId: user._id }
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
        return <AddBarcodes gln={gln} setGLN={setGLN} gtin={gtin} setGTIN={setGTIN} setActiveStep={setActiveStep} />;
      case 2:
        return <SelectUnites gln={gln} gtin={gtin} unit={unit} setUnit={setUnit} location={location} />;
      case 3:
        return <SelectWorkers workerList={workerList} workerIds={workerIds} setWorkerIds={setWorkerIds} />;
      case 4:
        return <AssignUnits workerIds={workerIds} setWorkerIds={setWorkerIds} />
      case 5:
        return <Timeframe startDate={startDate} setStartDate={setStartDate}/>
      case 6:
        return <Destination destination={destination} setDestination={setDestination} />
      case 10:
        return <ScanGLN setActiveStep={setActiveStep} setGLN={setGLN} setLocation={setLocation}/>
      case 11:
        return <ScanGTIN setActiveStep={setActiveStep} setGTIN={setGTIN} />
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
              unit={unit}
              location={location}
              destination={destination}
              gln={gln}
              gtin={gtin}
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