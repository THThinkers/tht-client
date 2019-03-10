import colors from '../constants/colors';

const SelectStyles = {
  valueContainer: (base: any) => ({ ...base, height: 57 }),
  placeholder: (base: any) => ({ ...base, fontSize: 24, fontFamily: 'Nanum Gothic', color: '#c1c1c1' }),
  control: (base: any) => ({ ...base, borderColor: '#8b8b8b', borderRadius: 'none', boxShadow: 'none', margin: 0 }),
  multiValue: (base: any) => ({
    ...base,
    fontSize: 24,
    fontFamily: 'Nanum Gothic',
    color: colors.prime,
    backgroundColor: 'transparent',
  }),
  multiValueLabel: (base: any) => ({ ...base, color: colors.prime }),
  multiValueRemove: (base: any) => ({ ...base, '&:hover': { backgroundColor: 'transparent' } }),
};

export default SelectStyles;
