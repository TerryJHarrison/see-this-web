import { useState } from 'react';

export function useControlledFormInput(initialState, setValInStore) {
  const [val, setVal] = useState(initialState);

  const handleFormInputChange = (e, {value}) => {
    setVal(value);
    setValInStore(value);
  };

  return [val, handleFormInputChange];
}
