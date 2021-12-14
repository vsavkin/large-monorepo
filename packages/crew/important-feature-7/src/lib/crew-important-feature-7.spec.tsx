import { render } from '@testing-library/react';

import CrewImportantFeature7 from './crew-important-feature-7';

describe('CrewImportantFeature7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature7 />);
    expect(baseElement).toBeTruthy();
  });
});
