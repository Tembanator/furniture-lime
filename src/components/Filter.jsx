import { useState } from 'react';
import Select from 'react-select'
const options = [
    { value: 'low-to-high', label: 'Price: Low to High' },
    { value: 'high-to-low', label: 'Price: High to Low' },
    { value: 'a-z', label: 'Name: A to Z' },
    { value: 'z-a', label: 'Name: Z to A' },
];
function Filter({ onSort }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (value) => {
        setSelectedOption(value)
        onSort(value)
    }

    return (
        <div className="w-[200px] ml-auto mb-8">
            <Select
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        '&:hover': { borderColor: '#cbd5e1' }, // border style on hover
                        border: '1px solid #cbd5e1', // default border color
                        boxShadow: 'none', // no box-shadow,
                        borderColor: state.isFocused ? '#cbd5e1' : '#94a3b8',
                        fontSize: '14px'
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isSelected ? 'lightgrey' : 'white',
                        '&:hover': { backgroundColor: '#f7fee7' },
                        fontSize: '13px'
                    }),
                }}
                defaultValue={selectedOption}
                onChange={(e) => handleChange(e.value)}
                options={options}
                placeholder={'Sort'}
            // value={selectedOption}
            />
        </div>
    )
}

export default Filter
