import { render } from '@testing-library/react';

import CrewImportantFeature9 from './crew-important-feature-9';

describe('CrewImportantFeature9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature9 />);
    expect(baseElement).toBeTruthy();
  });
});
