import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature9 from './flight-simulator-important-feature-9';

describe('FlightSimulatorImportantFeature9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature9 />);
    expect(baseElement).toBeTruthy();
  });
});
