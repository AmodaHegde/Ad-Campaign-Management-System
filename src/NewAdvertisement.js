import React, { useState } from 'react';

const NewAdvertisement = () => {
    const [adID, setAdID]= useState('');
    const [adPlatform, setAdPlatform] = useState('');
    const [targetPerf, setTargetPerf] = useState('');

    const handleadIDChange = (event) =>{
        setAdID(event.target.value);
    };
    const handlePlatformChange = (event) =>{
        setAdPlatform(event.target.value);
    };
    const handleTargetPerfChange = (event) => {
        setTargetPerf(event.target.value);
    };
    const AddNewAd =(event)=>{

    };

    return (
        <div className='NewAd'>
            <h1>Add new advertisement</h1>
            <p>Campaign ID: YYZZ</p>
            <p>Advertisement ID: 
                <input
                type="text"
                value={adID} 
                maxLength={10}
                onChange={handleadIDChange}
                />
            </p>
            <p>Advertisement platform: 
                <select value={adPlatform} onChange={handlePlatformChange}>
                    <option value="">Select...</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Google Ads">Google Ads</option>
                </select>
            </p>
            <p>Target performence (%): 
                <input
                type="number"
                value={targetPerf}
                maxLength={2}
                onChange={handleTargetPerfChange}
                />
            </p>
            <button onClick={AddNewAd}>Add advertisement</button>
        </div>
    )
}

export default NewAdvertisement;