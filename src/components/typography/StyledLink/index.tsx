import { Container } from './StyledLink.style';

type StyledLinkProps = {
  text: string;
};

export const StyledLink: React.FC<StyledLinkProps> = ({
  text,
}: StyledLinkProps) => {
  return <Container>{text}</Container>;
};
