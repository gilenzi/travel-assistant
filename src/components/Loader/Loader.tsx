import { LoaderContainer, LoadingText, StyledLoader } from "./styles";

export function Loader({ loadingText = "Loading..." }) {
  return (
    <LoaderContainer>
      <StyledLoader />
      <LoadingText>{loadingText}</LoadingText>
    </LoaderContainer>
  );
}
