import { render } from '@testing-library/react';

import NavigationImportantFeature8 from './navigation-important-feature-8';

describe('NavigationImportantFeature8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature8 />);
    expect(baseElement).toBeTruthy();
  });
});
