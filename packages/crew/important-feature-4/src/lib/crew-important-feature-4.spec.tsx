import { render } from '@testing-library/react';

import CrewImportantFeature4 from './crew-important-feature-4';

describe('CrewImportantFeature4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature4 />);
    expect(baseElement).toBeTruthy();
  });
});
