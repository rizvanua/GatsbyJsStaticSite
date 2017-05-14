import React,{Component} from 'react';
import 'react-dates/css/variables.scss';
import 'react-dates/css/styles.scss';

class Experience extends Component {
  render () {
    return (
        <div>
            <h1>{this.props.route.page.data.title}</h1>
            <p>Shortly about my main hobbies... .</p>

            <h2>Skiing.</h2>
            <p>I like skiing. Every winter I spent some time in mountanse, where I can skiing have a face to face communication with other skiiners and just good peoples.</p>

            <h2>Snorkeling.</h2>
                <p>Every summer I spent one or two weeks at a coast of sea. There I can diving with mask and observe fishes and other sea animals.</p>

            <h2>Jogging.</h2>
            <p>Two or three times per week I've been jogging for one hour . There is lovely lake near my house and I like morning jogging around it.</p>
        </div>

    )
  }
}

export default Experience

exports.data = {
    title: "Hobbies",
    date: "2015-05-06T23:46:37.121Z",
    readNext: "/hi-folks/",
    path: "/hobbies/",
    color: "red",
    class: "hobbies"
};
