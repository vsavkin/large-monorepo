import { render } from '@testing-library/react';

import NavigationImportantFeature11 from './navigation-important-feature-11';

describe('NavigationImportantFeature11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationImportantFeature11 />);
    expect(baseElement).toBeTruthy();
  });
});
