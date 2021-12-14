import { render } from '@testing-library/react';

import CrewImportantFeature3 from './crew-important-feature-3';

describe('CrewImportantFeature3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature3 />);
    expect(baseElement).toBeTruthy();
  });
});
