import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature17 from './flight-simulator-important-feature-17';

describe('FlightSimulatorImportantFeature17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature17 />);
    expect(baseElement).toBeTruthy();
  });
});
