import { render } from '@testing-library/react';

import NavigationImportantFeature1 from './navigation-important-feature-1';

describe('NavigationImportantFeature1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature1 />);
    expect(baseElement).toBeTruthy();
  });
});
