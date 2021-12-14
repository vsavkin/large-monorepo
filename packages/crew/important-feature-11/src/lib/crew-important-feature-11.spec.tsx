import { render } from '@testing-library/react';

import CrewImportantFeature11 from './crew-important-feature-11';

describe('CrewImportantFeature11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewImportantFeature11 />);
    expect(baseElement).toBeTruthy();
  });
});
