import React from 'react'

const styles = {
  height: 'auto',
  width: 'auto'
}

const About = (props) => (
   <div className="container">
    <div class="row my-5 mx-auto">
    <div class="col-sm-12 pr-5">
        <p class="text-muted text-left">
            GoSolar is an up-and-coming internet startup company dedicated to communities and individuals who are interested in becoming more energy responsible. We at GoSolar are dedicated to our consumers providing data and estimates to help start their financial planning out their investment in alternative energy. Among data research and quotation services, we also give a list of responsible alternative energy installation contractors to help our customers become better environmental stewards to their community, improving both their individual and their community’s health. 
            To get started on your (and your family’s and community’s) journey to become a more energy responsible citizen, click <a href="/"> here </a>.
        </p>
    </div>
    </div>
    <div className="container">
      <div className="row col-sm-2 py-3">
          <img src="https://media.gettyimages.com/photos/solar-power-plant-picture-id584487610?b=1&k=6&m=584487610&s=170x170&h=xpZnawyh4SGro34VjSGkVIEipx7ihl0ghLskbOrLQ7E=" style={styles} alt="someImg"/>
        </div>
        <div className="row col-sm-2 py-3">
          <img src="https://media.gettyimages.com/photos/solar-energy-concept-blue-sky-reflection-on-photovoltaic-panel-picture-id624985066?b=1&k=6&m=624985066&s=170x170&h=KYtmUGTeB6mYfcI7c1EkeXs0Ll4SvCoH-DHXSSwSxDI=" style={styles} alt="someImg"/>
        </div>
        <div className="row col-sm-2 py-3">
          <img src="https://media.gettyimages.com/photos/solar-energy-panels-and-wind-turbines-picture-id493187480?b=1&k=6&m=493187480&s=170x170&h=zxEc3xq3ZoJkxZRtl_EEBk0i1iK-YZQrH6mgxZduKaU=" style={styles} alt="someImg"/>
        </div>   
      </div>
    </div>
  )


  export default About;