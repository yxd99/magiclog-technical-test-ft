import React, { forwardRef, useState } from "react";
import { type ControllerRenderProps } from "react-hook-form";

import { Input } from "./ui/input";

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readOnly?: boolean;
}

const DateInput = forwardRef<
  HTMLInputElement,
  DateInputProps & ControllerRenderProps
>(({ readOnly = false, ...field }, ref) => {
  const [value, setValue] = useState(field.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    let formattedValue = "";

    if (input.length > 0) {
      formattedValue += input.substring(0, 2);
    }
    if (input.length >= 2) {
      formattedValue += `/${input.substring(2, 4)}`;
    }

    setValue(formattedValue);
    field.onChange(formattedValue);
  };

  return (
    <Input
      {...field}
      ref={ref}
      maxLength={5}
      placeholder="MM/YY"
      readOnly={readOnly}
      value={value}
      onChange={handleChange}
    />
  );
});

DateInput.displayName = "DateInput";

export default DateInput;
