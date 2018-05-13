import React, { Component } from 'react';
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

let Selectable = () => (
  <React.Fragment>
    <h3 className="callout">
      Click an event to see more info, or drag the mouse over the calendar to
      select a date/time range.
    </h3>
    <BigCalendar
      selectable
      events={events}
      toolbar={true} //muestra la barrita arriba del calendario
      step={15} //tamano de la seleccion
      timeslots={4} //tamano de los slots
      defaultView="week"
      scrollToTime={new Date(1970, 1, 1, 6)}
      defaultDate={new Date}
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={slotInfo =>
        alert(
          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
        )
      }
    />
  </React.Fragment>
)

export default Selectable