import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature6 from './flight-simulator-important-feature-6';

describe('FlightSimulatorImportantFeature6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature6 />);
    expect(baseElement).toBeTruthy();
  });
});
