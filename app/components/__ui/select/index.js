"use client";

const Select = ({title, name, value, options, ...rest}) => {
    return(
        <div>
            {name !== '' && <label>{name}</label>}
            <select name={name} value={value} {...rest}>
                {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select>
        </div>
    );
}

export default Select;