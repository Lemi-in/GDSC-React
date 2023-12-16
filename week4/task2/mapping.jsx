

import React from 'react';
import './mapping.css';
import member1Image from './images/member1.jpg';
import member2Image from './images/member2.jpg';
import member3Image from './images/member3.jpg';
import member4Image from './images/member4.jpg';
import member5Image from './images/member5.jpg';
import member6Image from './images/member6.jpg';
import member7Image from './images/member7.jpg';
import member8Image from './images/member8.jpg';
import member9Image from './images/member9.jpg';
import member10Image from './images/member10.jpg';

const Group10Members = () => {
  const members = [
    'Member 1',
    'Member 2',
    'Member 3',
    'Member 4',
    'Member 5',
    'Member 6',
    'Member 7',
    'Member 8',
    'Member 9',
    'Member 10',
    
  ];

  return (
    <div className="group-members">
      <h2>Group 10 Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index} className="member-item">
            <img src={require(`./images/member${index + 1}.jpg`).default} alt={`Member ${index + 1}`} className="member-image" />
            <span className="member-name">{member}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Group10Members;
