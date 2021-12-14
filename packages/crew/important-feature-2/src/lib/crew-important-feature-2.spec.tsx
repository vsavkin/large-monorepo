import { render } from '@testing-library/react';

import CrewImportantFeature2 from './crew-important-feature-2';

describe('CrewImportantFeature2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature2 />);
    expect(baseElement).toBeTruthy();
  });
});
