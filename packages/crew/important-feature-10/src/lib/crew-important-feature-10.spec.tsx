import { render } from '@testing-library/react';

import CrewImportantFeature10 from './crew-important-feature-10';

describe('CrewImportantFeature10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature10 />);
    expect(baseElement).toBeTruthy();
  });
});
