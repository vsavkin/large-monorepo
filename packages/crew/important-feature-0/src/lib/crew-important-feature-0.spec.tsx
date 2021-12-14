import { render } from '@testing-library/react';

import CrewImportantFeature0 from './crew-important-feature-0';

describe('CrewImportantFeature0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature0 />);
    expect(baseElement).toBeTruthy();
  });
});
