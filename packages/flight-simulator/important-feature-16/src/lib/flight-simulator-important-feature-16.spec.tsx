import { render } from '@testing-library/react';

import FlightSimulatorImportantFeature16 from './flight-simulator-important-feature-16';

describe('FlightSimulatorImportantFeature16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightSimulatorImportantFeature16 />);
    expect(baseElement).toBeTruthy();
  });
});
