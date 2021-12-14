import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature14 from './flight-simulator-important-feature-14';

describe('FlightSimulatorImportantFeature14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature14 />);
    expect(baseElement).toBeTruthy();
  });
});
