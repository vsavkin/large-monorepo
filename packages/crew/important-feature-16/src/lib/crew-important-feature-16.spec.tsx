import { render } from '@testing-library/react';

import CrewImportantFeature16 from './crew-important-feature-16';

describe('CrewImportantFeature16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature16 />);
    expect(baseElement).toBeTruthy();
  });
});
