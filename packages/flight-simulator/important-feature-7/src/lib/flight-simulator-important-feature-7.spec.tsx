import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature7 from './flight-simulator-important-feature-7';

describe('FlightSimulatorImportantFeature7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature7 />);
    expect(baseElement).toBeTruthy();
  });
});
