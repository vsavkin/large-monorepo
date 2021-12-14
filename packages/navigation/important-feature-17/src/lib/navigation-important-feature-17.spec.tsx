import { render } from '@testing-library/react';

import NavigationImportantFeature17 from './navigation-important-feature-17';

describe('NavigationImportantFeature17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature17 />);
    expect(baseElement).toBeTruthy();
  });
});
