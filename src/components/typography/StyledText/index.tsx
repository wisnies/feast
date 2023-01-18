import { Container } from './StyledText.style';

type StyledTextProps = {
  text: string;
};

export const StyledText: React.FC<StyledTextProps> = ({
  text,
}: StyledTextProps) => {
  return <Container>{text}</Container>;
};
