import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature4 from './flight-simulator-important-feature-4';

describe('FlightSimulatorImportantFeature4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature4 />);
    expect(baseElement).toBeTruthy();
  });
});
