import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature1 from './flight-simulator-important-feature-1';

describe('FlightSimulatorImportantFeature1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature1 />);
    expect(baseElement).toBeTruthy();
  });
});
