import { render } from '@testing-library/react';

import CrewImportantFeature15 from './crew-important-feature-15';

describe('CrewImportantFeature15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature15 />);
    expect(baseElement).toBeTruthy();
  });
});
