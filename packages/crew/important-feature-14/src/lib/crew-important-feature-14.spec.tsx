import { render } from '@testing-library/react';

import CrewImportantFeature14 from './crew-important-feature-14';

describe('CrewImportantFeature14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature14 />);
    expect(baseElement).toBeTruthy();
  });
});
