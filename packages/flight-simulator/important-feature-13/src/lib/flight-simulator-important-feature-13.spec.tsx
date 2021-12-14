import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature13 from './flight-simulator-important-feature-13';

describe('FlightSimulatorImportantFeature13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature13 />);
    expect(baseElement).toBeTruthy();
  });
});
