import React, { useState } from 'react';
import DropDown from './DropDown';
import axios from 'axios';

const NewCampaign = () => {

    const [campID, setCampID] = useState('');
    const advertiserID='YYZZ';
    const [campName, setCampName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleCampIDChange = (event) => {
        setCampID(event.target.value);
      };
    const handleCampNameChange = (event) => {
        setCampName(event.target.value);
      };
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
      };  
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
      };  
    const saveCamp = (event) => {

    };
    const addNewAd = (event)=>{

    };
    const sendDataToServer = () => {
        axios.post('http://localhost:3001/insertData', { data: stateVariables })
          .then(response => {
            console.log('Data inserted successfully');
            // Clear your state variables here
            setStateVariables({});
          })
          .catch(error => {
            console.error('Error inserting data: ', error);
          });
      };

    return (
        <div className='CampaignDetails'>
            <h1>Add new campaign</h1>
            <p>Campaign ID:  
                <input
                type="text"
                value={campID} 
                maxLength={10}
                onChange={handleCampIDChange}
                />
            </p>
            <p>Campaign ID: {campID}</p>
            <p>Campaign Name: 
                <input
                type="text"
                value={campName} 
                maxLength={20}
                onChange={handleCampNameChange}
                />
            </p>
            <p>Campaign Name: {campName}</p>
            <p>Start Date: 
                <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                />
            </p>
            <p>Start Date: {startDate}</p>
            <p>End Date: 
                <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                />
            </p>
            <p>End Date: {endDate}</p>
            <p>Client ID: 
                <DropDown/>
            </p>
            <p>Advertiser ID: {advertiserID}</p>
            <button onClick={saveCamp}>Save Campaign</button>
            <br></br>
            <button onClick={addNewAd}>Add new advertisement</button>
        </div>
    )
}

export default NewCampaign;