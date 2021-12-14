import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature18 from './flight-simulator-important-feature-18';

describe('FlightSimulatorImportantFeature18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature18 />);
    expect(baseElement).toBeTruthy();
  });
});
