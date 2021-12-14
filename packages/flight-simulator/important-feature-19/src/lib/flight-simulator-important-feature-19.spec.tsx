import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature19 from './flight-simulator-important-feature-19';

describe('FlightSimulatorImportantFeature19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature19 />);
    expect(baseElement).toBeTruthy();
  });
});
