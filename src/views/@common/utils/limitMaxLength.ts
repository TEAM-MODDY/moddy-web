interface limitMaxLengthProps {
  text: string;
  maxLength: number;
}

export const limitMaxLength = ({ text, maxLength }: limitMaxLengthProps) => {
  if (text.length >= maxLength) {
    text = text.slice(0, maxLength);
  }
};
