import { render } from '@testing-library/react';

import CrewImportantFeature6 from './crew-important-feature-6';

describe('CrewImportantFeature6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature6 />);
    expect(baseElement).toBeTruthy();
  });
});
