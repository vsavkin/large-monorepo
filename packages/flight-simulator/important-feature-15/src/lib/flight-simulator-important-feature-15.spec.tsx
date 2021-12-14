import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature15 from './flight-simulator-important-feature-15';

describe('FlightSimulatorImportantFeature15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature15 />);
    expect(baseElement).toBeTruthy();
  });
});
