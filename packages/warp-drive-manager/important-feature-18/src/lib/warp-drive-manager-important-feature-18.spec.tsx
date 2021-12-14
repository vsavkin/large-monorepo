import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature18 from './warp-drive-manager-important-feature-18';

describe('WarpDriveManagerImportantFeature18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature18 />);
    expect(baseElement).toBeTruthy();
  });
});
