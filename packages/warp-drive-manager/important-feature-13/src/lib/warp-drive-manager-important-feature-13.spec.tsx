import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature13 from './warp-drive-manager-important-feature-13';

describe('WarpDriveManagerImportantFeature13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature13 />);
    expect(baseElement).toBeTruthy();
  });
});
