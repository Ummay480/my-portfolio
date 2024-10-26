import React from 'react';
import ProjectSection from '../../components/ProjectSection';
import Contacts from "../../components/Contacts";
import Header3 from "../../components/Header3";

export default function Projects() {
  return (
  
    <>
     <div>
      <Header3/>
    </div>

      <div className='flex justify-center mt-40'>
          <ProjectSection/>
        </div>

        <div className='-mb-14'>
        <Contacts/>
      </div>
    </>
  );
}
