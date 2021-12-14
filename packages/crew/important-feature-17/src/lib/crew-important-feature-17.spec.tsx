import { render } from '@testing-library/react';

import CrewImportantFeature17 from './crew-important-feature-17';

describe('CrewImportantFeature17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature17 />);
    expect(baseElement).toBeTruthy();
  });
});
