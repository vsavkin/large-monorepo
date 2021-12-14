import { render } from '@testing-library/react';

import NavigationImportantFeature9 from './navigation-important-feature-9';

describe('NavigationImportantFeature9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature9 />);
    expect(baseElement).toBeTruthy();
  });
});
