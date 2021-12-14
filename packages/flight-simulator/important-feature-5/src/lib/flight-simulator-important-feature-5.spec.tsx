import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature5 from './flight-simulator-important-feature-5';

describe('FlightSimulatorImportantFeature5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature5 />);
    expect(baseElement).toBeTruthy();
  });
});
