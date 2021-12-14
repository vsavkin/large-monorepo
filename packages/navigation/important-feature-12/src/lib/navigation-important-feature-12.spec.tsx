import { render } from '@testing-library/react';

import NavigationImportantFeature12 from './navigation-important-feature-12';

describe('NavigationImportantFeature12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature12 />);
    expect(baseElement).toBeTruthy();
  });
});
