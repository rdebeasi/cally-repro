import React from "react";
import "cally";
import "./date-picker.css";

export interface DatePickerProps {
  onClick?: () => void;
}

import type { HTMLAttributes } from "react";

export const DatePicker = ({ onClick, ...props }: DatePickerProps) => {
  return (
    <calendar-date>
      <calendar-month></calendar-month>
    </calendar-date>
  );
};
