import { render } from '@testing-library/react';

import NavigationImportantFeature3 from './navigation-important-feature-3';

describe('NavigationImportantFeature3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature3 />);
    expect(baseElement).toBeTruthy();
  });
});
