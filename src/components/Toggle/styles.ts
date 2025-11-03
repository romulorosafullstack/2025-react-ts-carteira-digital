import styled from "styled-components";
import Switch, {type ReactSwitchProps} from 'react-switch'

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ToggleLabel = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.1;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    checkedIcon: false,
    uncheckedIcon: false,
    handleDiameter: 18,
    height: 22,
    onColor: theme.colors.success,
    offColor: theme.colors.error,
  }))<ReactSwitchProps>``;