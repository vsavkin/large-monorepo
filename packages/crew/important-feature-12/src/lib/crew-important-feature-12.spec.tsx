import { render } from '@testing-library/react';

import CrewImportantFeature12 from './crew-important-feature-12';

describe('CrewImportantFeature12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature12 />);
    expect(baseElement).toBeTruthy();
  });
});
