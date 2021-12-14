import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature3 from './flight-simulator-important-feature-3';

describe('FlightSimulatorImportantFeature3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature3 />);
    expect(baseElement).toBeTruthy();
  });
});
