import React, { ChangeEvent, useCallback } from "react";
import { Box } from "../Box";
import {
  BunnySlider,
  BarBackground,
  BarProgress,
  StyledInput,
  SliderLabel,
  BarBackground2,
  SliderLabelContainer,
} from "./styles";
import SliderProps from "./types";

const Slider: React.FC<SliderProps> = ({
  name,
  min,
  max,
  value,
  onValueChanged,
  valueLabel,
  step = "any",
  disabled = false,
  ...props
}) => {
  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      onValueChanged(parseFloat(target.value));
    },
    [onValueChanged]
  );

  const progressPercentage = (value / max) * 100;
  const isMax = value === max;
  let progressWidth: string;
  if (progressPercentage === 100) {
    progressWidth = "100%";
} else if (progressPercentage >= 90) {
    progressWidth = `${progressPercentage - 4}%`;
} else if (progressPercentage >= 60) {
    progressWidth = `${progressPercentage - 2.5}%`;
} else {
    progressWidth = `${progressPercentage}%`;
}
  const labelProgress = isMax ? "calc(100% - 0px)" : `${progressPercentage}%`;
  const displayValueLabel = isMax ? "MAX" : valueLabel;
  return (
    <Box position="relative" height="48px" {...props}>

      <BunnySlider>
        <BarBackground disabled={disabled} />
        <BarProgress style={{ width: progressWidth }} disabled={disabled} />
       
        <StyledInput
          name={name}
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
          isMax={isMax}
          disabled={disabled}
        />

       
      </BunnySlider>
      {valueLabel && (
        <SliderLabelContainer>
          <SliderLabel progress={labelProgress}>{displayValueLabel}</SliderLabel>
        </SliderLabelContainer>
      )}
    </Box>
  );
};

export default Slider;
