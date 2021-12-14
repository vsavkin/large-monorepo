import { render } from '@testing-library/react';

import NavigationImportantFeature7 from './navigation-important-feature-7';

describe('NavigationImportantFeature7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature7 />);
    expect(baseElement).toBeTruthy();
  });
});
