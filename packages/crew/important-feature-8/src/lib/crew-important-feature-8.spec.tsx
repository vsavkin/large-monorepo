import { render } from '@testing-library/react';

import CrewImportantFeature8 from './crew-important-feature-8';

describe('CrewImportantFeature8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature8 />);
    expect(baseElement).toBeTruthy();
  });
});
