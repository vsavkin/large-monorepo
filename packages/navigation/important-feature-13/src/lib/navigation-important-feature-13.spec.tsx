import { render } from '@testing-library/react';

import NavigationImportantFeature13 from './navigation-important-feature-13';

describe('NavigationImportantFeature13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature13 />);
    expect(baseElement).toBeTruthy();
  });
});
