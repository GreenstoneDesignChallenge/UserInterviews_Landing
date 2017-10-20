import React, { Component } from 'react';
import '../../App.css';




export default class LandingComponentThree extends Component{

  render(){

    return(

      <div className="meaningfulHealth padding ui secondaryColor">
        {/* <h1 className="underLine ui center aligned icon header">Insights</h1>
      <p className="pad ui center aligned icon header">Through in-person interviews, surveys, technology standards, and health research I discoevered some key insights.</p> */}

    <div className="landing3 ui segment container">
        <div className="ui column stackable grid">
          <div className="row">
          <div className="eight ui wide column social segment left">
            <h3 className="centeredTitle">Meaningful health is different for everyone</h3>
            <img className="ui medium centered image" src="../../../images/health3.jpeg"/>
          <li>People engage with healthcare, and health records, in many different ways.</li>
        <li>The perception of one's health comes from how an individual views their own emotional, physical, and mental health.</li>
      <li>While personal well-being is important toward health and hapiness, the health of relationships and work-life drives an individual's health as well.</li>
    <li>Cost of care and one's financial well status play a pivotal role in a person health and well-being</li>

          </div>
          </div>
          <div className="row">
            <div className="eight ui wide column social segment right">
              <h3 className="centeredTitle">Consumer and value-based health involves more than just the consumer</h3>
            <img className="ui medium centered image" src="../../../images/healthfour.jpeg"/>
            <li>Consumer (patient) centered health is dependent on healthcare practitioners, health intermediaries, and health confidants.</li>
            <li>Consumer, Payers, and providers are interested in value based care, but not necessary will to pay for it.</li>
            <li>Consumer health records come from a variety of traditional and not traditional sources.</li>
          <li>Standardization of health data and true interoperability is critical for long term outcomes based medicine.</li>
            </div>
          </div>
          <div className="row">
              <div className="eight ui wide column social segment left">
                <h3 className="centeredTitle">Digital health records are complicated</h3>
                <img className="ui medium centered image" src="../../../images/healthOne.jpeg"/>
              <li>Formal electronic health records come from Pharmacies, Immunization Registeries, Insurance Providers, Hospitals/Clinics, and Laboratories.</li>
            <li>HIPAA compliance and interoperability/infrastructure standardization remain barriers to meaningful health software.</li>
          <li>Cosumers each care of about slightly different aspects of their health records, but do not want to see everything.</li>
        <li>People would be willing to pay </li>
              </div>
          </div>


    </div>


      </div>



      </div>
    )
  }
}
