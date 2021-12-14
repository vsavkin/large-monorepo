import { render } from '@testing-library/react';

import CrewImportantFeature18 from './crew-important-feature-18';

describe('CrewImportantFeature18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature18 />);
    expect(baseElement).toBeTruthy();
  });
});
