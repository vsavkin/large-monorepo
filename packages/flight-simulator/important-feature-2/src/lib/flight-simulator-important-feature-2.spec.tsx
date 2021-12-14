import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature2 from './flight-simulator-important-feature-2';

describe('FlightSimulatorImportantFeature2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature2 />);
    expect(baseElement).toBeTruthy();
  });
});
