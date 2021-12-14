import { render } from '@testing-library/react';

import NavigationImportantFeature0 from './navigation-important-feature-0';

describe('NavigationImportantFeature0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature0 />);
    expect(baseElement).toBeTruthy();
  });
});
