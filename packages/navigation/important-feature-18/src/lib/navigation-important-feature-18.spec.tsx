import { render } from '@testing-library/react';

import NavigationImportantFeature18 from './navigation-important-feature-18';

describe('NavigationImportantFeature18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature18 />);
    expect(baseElement).toBeTruthy();
  });
});
