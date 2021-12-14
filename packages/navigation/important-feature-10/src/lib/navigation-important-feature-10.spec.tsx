import { render } from '@testing-library/react';

import NavigationImportantFeature10 from './navigation-important-feature-10';

describe('NavigationImportantFeature10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature10 />);
    expect(baseElement).toBeTruthy();
  });
});
