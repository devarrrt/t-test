import { FC } from 'react';

import { CustomCheckbox, HiddenInput, Label } from './styles';

interface OptionProps {
  id: string;
  text: string;
  isChecked: (id: string) => boolean;
  type: 'radio' | 'checkbox';
  questionId: string;
  handleChange: (id: string) => void;
}

export const Option: FC<OptionProps> = ({
  id,
  text,
  isChecked,
  type,
  questionId,
  handleChange,
}) => {
  return (
    <Label>
      <span>{text}</span>
      <HiddenInput
        type={type}
        name={questionId}
        value={id}
        checked={isChecked(id)}
        onChange={() => handleChange(id)}
        id={`option_${id}`}
      />
      <CustomCheckbox checked={isChecked(id)} type={type} />
    </Label>
  );
};
