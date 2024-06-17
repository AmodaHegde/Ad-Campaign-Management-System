import React, { useState } from 'react';

function Form() {
  
  const [formData, setFormData] = useState({
    campID: '',
    campName: '',
    startDate: '',
    endDate: '',
    adID:'',
    adPlatform:'',
    targetPerf:'',
  });

  // Event handler to update form field values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Process form submission here...
    
    // Reset form fields to initial values
    setFormData({
      campID: '',
      campName: '',
      startDate: '',
      endDate: '',
      adID:'',
      adPlatform:'',
      targetPerf:'',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Campaign ID:
        <input
          type="text"
          name="campID"
          value={formData.campID}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Campaign Name:
        <input
          type="text"
          name="campName"
          value={formData.campName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Ad ID:
        <input
          type="text"
          name="adID"
          value={formData.adID}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Ad Platform:
        <input
          type="text"
          name="adPlatform"
          value={formData.adPlatform}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Target Performance:
        <input
          type="text"
          name="targetPerf"
          value={formData.targetPerf}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
