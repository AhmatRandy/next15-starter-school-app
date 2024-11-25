"use client";

import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import moment from "moment";
import React from "react";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
export const BigCalender = () => {
  const [view, setView] = React.useState<View>(Views.WORK_WEEK);

  const handleView = (selected: View) => {
    setView(selected);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      views={["work_week", "day"]}
      view={view}
      style={{ height: 500 }}
      onView={handleView}
      endAccessor="end"
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};
