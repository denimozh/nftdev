import React from 'react'
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
  }

const PriceSlider = () => {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
     };
    return (
        <div className='flex flex-col'>
            <Slider
            getAriaLabel={() => 'Price Range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            />
        </div>
    )
}

export default PriceSlider