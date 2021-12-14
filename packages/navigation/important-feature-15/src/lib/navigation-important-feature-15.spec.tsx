import { render } from '@testing-library/react';

import NavigationImportantFeature15 from './navigation-important-feature-15';

describe('NavigationImportantFeature15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature15 />);
    expect(baseElement).toBeTruthy();
  });
});
