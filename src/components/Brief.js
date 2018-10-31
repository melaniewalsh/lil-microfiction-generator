import React from 'react';
import './Brief.scss';

var pluralize = require('pluralize')

const Brief = ({brief}) => (
  <article >
    <h1 className="header">

      <img src="http://clipart-library.com/img/936445.png"  alt="lil star guy" className="image_right"/>
      <img src="http://clipart-library.com/img/936445.png"  alt="lil star guy" className="image_left"/>
      {brief.category} and the {brief.animal.replace(/^\w/, c => c.toUpperCase())}</h1>
    <h4 className="header">by <a href="https://melaniewalsh.org">Melanie Walsh's</a> lil' microfiction generator</h4>
    <p>
      "{brief.interjection.replace(/^\w/, c => c.toUpperCase())}," said the {brief.animal.replace(/^\w/, c => c.toUpperCase())}, {brief.animalOccupation}{brief.celebrity}, from the {brief.table}. The {brief.animal.replace(/^\w/, c => c.toUpperCase())} was {brief.drunk} on {brief.food} (which can be very intoxicating for {pluralize(brief.animal)}, if you didn't know). "Don't these {brief.subject} seem to get more <i>{brief.adjective}</i> every year?"
    </p>
    <p>
      "Excuse me?" said the {brief.conflictPerson} who had heard the {brief.animal.replace(/^\w/, c => c.toUpperCase())} clear as day.
    </p>
    <p>
    "Oh, {brief.interjection2}," said the {brief.animal.replace(/^\w/, c => c.toUpperCase())}, "another {brief.conflictPersonSpecific} who's as {brief.description} as {brief.food2}."
    </p>
    <p>
"Excuse me?" said the {brief.conflictPersonSpeaking}, again.
    </p>
    The {brief.conflictPersonSpeaking} {brief.Action1} {brief.celebrity}{brief.Action2} the {brief.table}.
    <p>
      </p>
    <p>
  "Oh, {brief.interjection3}," said the {brief.animal.replace(/^\w/, c => c.toUpperCase())}. "Did I say you were as {brief.description} as {brief.food2}? I meant you were as {brief.description3} as {brief.food3}."
</p>
<p>
  "What do you mean this {brief.currentSubject} is <i>{brief.adjective}</i>?" said the {brief.conflictPersonSpeaking}. "Explain yourself."</p>

    <p>
      "Look," said the {brief.animal.replace(/^\w/, c => c.toUpperCase())}. "{brief.shakespeare.trim()}."
    </p>

  </article>
)

export default Brief;
