/* eslint-disable react/prop-types */
type Props = {
  children: React.ReactNode;
};

export const BackButton: React.FC<Props> = ({ children }) => {
  return <button type="button">{children}</button>;
};
