import { render } from '@testing-library/react';

import CrewImportantFeature5 from './crew-important-feature-5';

describe('CrewImportantFeature5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature5 />);
    expect(baseElement).toBeTruthy();
  });
});
