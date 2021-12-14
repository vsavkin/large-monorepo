import { render } from '@testing-library/react';

import CrewImportantFeature19 from './crew-important-feature-19';

describe('CrewImportantFeature19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature19 />);
    expect(baseElement).toBeTruthy();
  });
});
