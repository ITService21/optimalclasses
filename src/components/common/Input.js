import React, { useRef, useEffect } from "react";

const Input = ({
  defaultValue,
  onkKeyUp,
  autocomplete,
  onmouseout,
  onFocus,
  pattern,
  onInput,
  maxLength,
  value,
  onChange,
  min,
  max,
  type = "text",
  errormessage,
  className,
  placeholder,
  name,
  disabled,
  onBlur,
  style,
  required,
}) => {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (type === "number") {
      const invalidChars = ["e", "E", "+", "-"];
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("wheel", handleWheel);
      return () => {
        inputElement.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  const handleWheel = (e) => {
    if (type === "number" && document.activeElement === inputRef.current) {
      e.preventDefault();
    }
  };

  const inputStyle = {
    ...(type === "number" && {
      WebkitAppearance: "none",
      MozAppearance: "textfield",
      msAppearance: "none",
      appearance: "none",
      ...style,
    }),
  };

  const adjustedValue = type === "number" && value < 0 ? 0 : value;

  return (
    <div>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        autoComplete={autocomplete}
        onMouseOut={onmouseout}
        onFocus={onFocus}
        pattern={pattern}
        maxLength={maxLength}
        value={adjustedValue}
        onChange={onChange}
        type={type}
        min={0}
        max={max}
        name={name}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        onBlur={onBlur}
        onInput={onInput}
        onKeyUp={onkKeyUp}
        style={inputStyle} // Apply the style here
        className={className}
        required={required}
      />
    </div>
  );
};

export default Input;
