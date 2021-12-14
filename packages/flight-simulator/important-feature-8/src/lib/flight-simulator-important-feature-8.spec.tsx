import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature8 from './flight-simulator-important-feature-8';

describe('FlightSimulatorImportantFeature8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature8 />);
    expect(baseElement).toBeTruthy();
  });
});
