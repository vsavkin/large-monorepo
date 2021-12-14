import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature0 from './flight-simulator-important-feature-0';

describe('FlightSimulatorImportantFeature0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature0 />);
    expect(baseElement).toBeTruthy();
  });
});
