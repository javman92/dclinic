import React, { Component } from 'react';
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
    render(){
        return(
          <React.Fragment>
            <BigCalendar
              startAccessor='startDate'
              endAccessor='endDate'
              selectable
              events={events}
              weekends={false}
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
    }
}
export default Calendar