// Editor component
export default function Editor( {data, info, sections, onChange, changeData, changeSections} ) {
    // Function to handle deletion of an experience
    function handleDelete(e) {
      const deletedId = Number(e.target.parentNode.className.slice(13)); // Extract the ID of the experience to be deleted
  
      const deletedData = data.find((d) => d.id === deletedId); // Find the experience to be deleted
      changeData([...data].filter((d) => d.id !== deletedData.id)); // Remove the experience from the data state
  
      const alteredSection = sections.find((s) => s.dataIds.includes(deletedId)); // Find the section containing the deleted experience
      const filteredIds = alteredSection.dataIds.filter(i => i !== deletedId); // Remove the deleted experience ID from the section
  
      const newSections = [...sections].map((s) => 
        s.id === alteredSection.id ? {...s, dataIds: filteredIds} : s
      );
  
      changeSections(newSections); // Update the sections state
    }
  
    // Function to handle addition of a new experience
    function handleAdd(e) {
      const sectionId = Number(e.target.parentNode.className.slice(21)); // Extract the ID of the section to which the new experience will be added
      const section = sections.find((s) => s.id === sectionId); // Find the section object
  
      // Create a new experience object with default values and a unique ID
      const exp = {
        title: '', 
        startDate: '', 
        endDate: '', 
        role: '', 
        info: '', 
        location: ''
      }
  
      const takenIds = [];
      data.forEach((d) => takenIds.push(d.id)); // Get all existing experience IDs
      
      let expId = 0;
      while (takenIds.includes(expId)) {
        expId += 1; // Find a unique ID for the new experience
      }
  
      exp.id = expId; // Set the ID for the new experience
      const newIds = Array.from(section.dataIds); // Clone the existing IDs array
      newIds.push(expId); // Add the ID of the new experience
      
      changeData([...data, exp]); // Add the new experience to the data state
      
      const newSections = [...sections].map((s) => 
        s.id === sectionId ? {...s, dataIds: newIds} : s // Update the sections state with the new experience ID
      )
  
      changeSections(newSections); // Update the sections state
    }
    
    // Rendering the editor UI
    return (
      <div className='editor'>
        <div className="edit-info">
          <h1>Personal info</h1>
          <input type='text' className='edit-info-name' value={info.name} onChange={onChange} placeholder='Name' />
          <input type='text' className='edit-info-email' value={info.email} onChange={onChange} placeholder='Email' />
          <input type="text" className='edit-info-phone' value={info.phone} onChange={onChange} placeholder='Phone' />
          <input type="text" className='edit-info-location' value={info.location} onChange={onChange} placeholder="Location" />
        </div>
        <div className='edit-sections'>
          {sections.map((s) => { return (
            <div key={s.id} className={'edit-section' + ' section-' + s.id}>
              <h1>{s.title}</h1>
              {data.map((d) => { if (s.dataIds.includes(d.id)) {
                return (
                  <div className={'edit-exp' + ' exp-' + d.id} key={d.id}>
                    <input type="text" className='edit-exp-title' value={d.title} onChange={onChange} placeholder='Institution' />
                    <input type="text" className='edit-exp-startDate' value={d.startDate} onChange={onChange} placeholder='Start date'/>
                    <input type="text" className='edit-exp-endDate' value={d.endDate} onChange={onChange} placeholder='End date'/>
                    <input type="text" className='edit-exp-role' value={d.role} onChange={onChange} placeholder='Position, degree or role'/>
                    <input type="text" className='edit-exp-info' value={d.info} onChange={onChange} placeholder='Description'/>
                    <input type="text" className='edit-exp-location' value={d.location} onChange={onChange} placeholder='Location'/>
                    <button onClick={(e) => {handleDelete(e)}}>Delete</button>
                  </div>
                )
              } else {
                return null;
              }
              })}
              <button onClick={(e) => handleAdd(e) }>{'+ ' + s.title}</button>
            </div>
          )
          })}
        </div>
      </div>
    )
  }
  