// gustydev/ Gustavo .D

import Curriculum from "./Curriculum";
import Editor from './Editor.jsx';
import { data, info, sections } from "../data"; 
import { useState } from 'react'; 


function App() {

  const [initialData, changeData] = useState(data);
  const [initialInfo, changeInfo] = useState(info);
  const [initialSections, changeSections] = useState(sections);

  function handleChange(e) {

    if (e.target.parentNode.className === 'edit-info') {
      const changedValue = e.target.className.slice(10); 
      const newInfo = {...initialInfo, [changedValue]: e.target.value}; 

      changeInfo(newInfo); 

    } else {
      const changedValue = e.target.className.slice(9); 
      const expId = Number(e.target.parentNode.classList[1].substring(4)); 
      const alteredData = {...initialData.find((d) => d.id === expId)}; 

      alteredData[changedValue] = e.target.value; 

     
      changeData([...initialData].map((d) => 
        d.id === expId ? alteredData : d
      ));
    }
  }


  return (
    <>
      <h1 className='title'>CVCraft</h1>
      {}
      <Editor 
        data={initialData} 
        info={initialInfo} 
        sections={initialSections} 
        onChange={handleChange} 
        changeData={changeData} 
        changeSections={changeSections} />
      {}
      <Curriculum data={initialData} info={initialInfo} sections={initialSections} />
      {}
      <button className='print-button' onClick={() => window.print()}></button>
    </>
  )
}


export default App;
