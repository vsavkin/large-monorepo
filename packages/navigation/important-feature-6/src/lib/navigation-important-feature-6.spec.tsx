import { render } from '@testing-library/react';

import NavigationImportantFeature6 from './navigation-important-feature-6';

describe('NavigationImportantFeature6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature6 />);
    expect(baseElement).toBeTruthy();
  });
});
