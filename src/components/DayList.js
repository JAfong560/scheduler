import React from 'react';
import DayListItem from 'components/DayListItem';

// DayList renders a list of DayListItem components
export default function DayList(props) {
  const dayClass = props.days.map(props => {
 
    return (
        <DayListItem
        key={props.id} 
        name={props.name} 
        spots={props.spots} 
        selected={props.name === props.value}
        setDay={props.onChange}
       />
    )
  })
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}

// The DayList Component Props: 
// days:Array a list of day objects (each object includes an id, name, and spots)
// day:String the currently selected day
// setDay:Function accepts the name of the day eg. "Monday", "Tuesday"