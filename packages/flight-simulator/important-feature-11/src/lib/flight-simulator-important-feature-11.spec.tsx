import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature11 from './flight-simulator-important-feature-11';

describe('FlightSimulatorImportantFeature11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature11 />);
    expect(baseElement).toBeTruthy();
  });
});
