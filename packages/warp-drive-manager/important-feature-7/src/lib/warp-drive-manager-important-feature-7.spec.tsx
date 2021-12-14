import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature7 from './warp-drive-manager-important-feature-7';

describe('WarpDriveManagerImportantFeature7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature7 />);
    expect(baseElement).toBeTruthy();
  });
});
