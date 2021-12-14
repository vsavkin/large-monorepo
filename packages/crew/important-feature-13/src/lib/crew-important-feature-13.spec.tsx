import { render } from '@testing-library/react';

import CrewImportantFeature13 from './crew-important-feature-13';

describe('CrewImportantFeature13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature13 />);
    expect(baseElement).toBeTruthy();
  });
});
