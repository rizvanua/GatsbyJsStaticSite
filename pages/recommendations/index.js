import  React, {Component} from 'react';
import json from './recommendations.json';
import 'react-dates/css/variables.scss';
import 'react-dates/css/styles.scss';

class Recommendations extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.route.page.data.title}</h1>
          {json.data.map((job,index)=>{
              return(<div key={index}>
                  <h2>{job.name}</h2>
                  <h3>{job.position}</h3>
                  <p className="recomText">{job.text}</p>
              </div>)
          })}
      </div>
    )
  }
}

export default Recommendations

exports.data = {
  title: "Recommendations",
  date: "2016-12-09T12:40:32.169Z",
  color: "blue",
  class: "recommendations"
}
