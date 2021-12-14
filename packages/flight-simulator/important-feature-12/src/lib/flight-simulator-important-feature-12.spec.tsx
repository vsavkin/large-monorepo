import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature12 from './flight-simulator-important-feature-12';

describe('FlightSimulatorImportantFeature12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature12 />);
    expect(baseElement).toBeTruthy();
  });
});
