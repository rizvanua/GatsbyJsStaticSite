import  React, {Component} from 'react';

import 'react-dates/css/variables.scss';
import 'react-dates/css/styles.scss';

class Technologies extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.route.page.data.title}</h1>
          <h2>Programming languages and APIs:</h2>
          <p>JavaScript, TypeScript, SVG, HTML5 Canvas, WebGL, CSS/SASS/LESS,Node.Js,asm.js,PHP</p>

          <h2>Frameworks:</h2>
          <p>Angular 1.x/2, ReactJs, React Native, MeteorJs, jQuery, Ionic, ThreeJs, D3.js, Paper.js, Snap.js, Raphael.js, Bootstrap, Foundation, Schema, PHP Symfony</p>

              <h2>Template engines:</h2>
          <p>Pug, Mustache, Twig</p>

                  <h2>Development environments and tools:</h2>
          <p>PHPStorm, WebStorm, Atom</p>

                      <h2>DB:</h2>
          <p>SQLite, MySQL, MongoDB</p>
      </div>
    )
  }
}

export default Technologies

exports.data = {
    title: "Technologies",
    date: "2015-05-28T22:40:32.169Z",
    path: "/technologies/",
    color: "grey",
    class: "technologies"
}
