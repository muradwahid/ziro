import React from 'react';
import LastEventHero from '../LastEventHero/LastEventHero';
import LastUpcommingEvents from '../LastUpcommingEvents/LastUpcommingEvents';

const LastEventList = () => {
  return (
    <div>
      <LastEventHero />
      <LastUpcommingEvents/>
    </div>
  );
};

export default LastEventList;