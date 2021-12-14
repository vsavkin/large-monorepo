import { render } from '@testing-library/react';

import NavigationImportantFeature4 from './navigation-important-feature-4';

describe('NavigationImportantFeature4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature4 />);
    expect(baseElement).toBeTruthy();
  });
});
