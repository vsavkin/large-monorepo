import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature3 from './warp-drive-manager-important-feature-3';

describe('WarpDriveManagerImportantFeature3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature3 />);
    expect(baseElement).toBeTruthy();
  });
});
