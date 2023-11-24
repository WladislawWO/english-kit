import BaseSelect from 'react-select';
import cn from 'classnames';
import st from './styles.module.scss';

export function Select({
  placeholder, value, onChange, options, className, ...props
}) {
  return (
    <BaseSelect
      className={cn(st.select, className)}
      value={value}
      onChange={onChange}
      options={options}
      classNamePrefix="react-select"
      placeholder={placeholder}
      {...props}
    />
  );
}
