import { render } from '@testing-library/react';

import NavigationImportantFeature14 from './navigation-important-feature-14';

describe('NavigationImportantFeature14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature14 />);
    expect(baseElement).toBeTruthy();
  });
});
