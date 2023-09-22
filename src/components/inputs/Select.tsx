import { Sort } from '@/components/app/MovieCardListSection';
import React from 'react';

interface SelectProps {
  label?: string;
  labelId?: string;
  value: string;
  onChangeValue: (text: any) => void;
  customLabelStyle?: string;
  customInputStyle?: string;
  options: Sort[]
}

const defaultLabelStyle = `w-16 text-left text-sm text-white leading-[22px]`;
const defaultInputStyle = `w-32 form-select bg-[#00000095] text-white border border-solid border-[#C5C5C595] active:border-[#656565] focus:border-[#656565] outline-none rounded-[15px] text-sm leading-[19px] text-black placeholder:text-[#C5C5C5] py-2 px-5`

const Select = ({
  label = '',
  labelId = '',
  value,
  onChangeValue = () => { },
  customLabelStyle = '',
  customInputStyle = '',
  options = []
}: SelectProps) => {

  return (
    <div className='flex items-center'>
      {
        label.length
          ? <label htmlFor={labelId} className={customLabelStyle || defaultLabelStyle}>{label} :</label>
          : <></>
      }

      <select
        id={labelId}
        name={label}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        className={customInputStyle || defaultInputStyle}
      >
        {
          options.map((item) => (
            <option key={item.id} value={item.value}>{item.value}</option>
          ))
        }
      </select>

    </div>
  );
}

export default Select