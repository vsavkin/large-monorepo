import { render } from '@testing-library/react';

import CrewImportantFeature1 from './crew-important-feature-1';

describe('CrewImportantFeature1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature1 />);
    expect(baseElement).toBeTruthy();
  });
});
