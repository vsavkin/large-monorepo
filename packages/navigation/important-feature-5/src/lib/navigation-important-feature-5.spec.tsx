import { render } from '@testing-library/react';

import NavigationImportantFeature5 from './navigation-important-feature-5';

describe('NavigationImportantFeature5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature5 />);
    expect(baseElement).toBeTruthy();
  });
});
