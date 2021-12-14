import { render } from '@testing-library/react';

import NavigationImportantFeature2 from './navigation-important-feature-2';

describe('NavigationImportantFeature2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature2 />);
    expect(baseElement).toBeTruthy();
  });
});
