import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature10 from './flight-simulator-important-feature-10';

describe('FlightSimulatorImportantFeature10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature10 />);
    expect(baseElement).toBeTruthy();
  });
});
