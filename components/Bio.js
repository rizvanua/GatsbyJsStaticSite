import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import profilePic from './rizvan.jpg'


class Bio extends React.Component {
  render () {
    return (
    <div>
        <img className="hearderImg"
            src={profilePic}
            alt={`author ${config.authorName}`}
        />
        <p>Front-end developer with experience in web development, marketing and project management.
            I like new challenges and discovering what can improve my efficiency.
            I have a creative mind, self-motivation and responsibility to working in a team as well as on my own.</p>

    </div>

    )
  }
}

export default Bio
