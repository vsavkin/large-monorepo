import { render } from '@testing-library/react';

import NavigationImportantFeature16 from './navigation-important-feature-16';

describe('NavigationImportantFeature16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature16 />);
    expect(baseElement).toBeTruthy();
  });
});
