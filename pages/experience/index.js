import React,{Component} from 'react';
import json from './jobs.json';
import 'react-dates/css/variables.scss';
import 'react-dates/css/styles.scss';

class Experience extends Component {
  render () {
      const jobArr=json.data;
      console.log(json.data);
    return (
        <div>
            <h1>{this.props.route.page.data.title}</h1>
    {json.data.map((job,index)=>{
        return(<div key={index}>
            <h2>{job.position}</h2>
            <h3>{job.company}</h3>
            <p className="job-period">{job.period}</p>
        </div>)
    })}
        </div>

    )
  }
}

export default Experience

exports.data = {
  title: "Experience",
  date: "2015-05-06T23:46:37.121Z",
  color: "blue",
  class: "suitcase"
}
