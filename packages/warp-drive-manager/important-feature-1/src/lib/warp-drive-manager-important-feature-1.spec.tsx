import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature1 from './warp-drive-manager-important-feature-1';

describe('WarpDriveManagerImportantFeature1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature1 />);
    expect(baseElement).toBeTruthy();
  });
});
