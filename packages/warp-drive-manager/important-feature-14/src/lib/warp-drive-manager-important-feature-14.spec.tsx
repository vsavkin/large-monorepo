import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature14 from './warp-drive-manager-important-feature-14';

describe('WarpDriveManagerImportantFeature14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature14 />);
    expect(baseElement).toBeTruthy();
  });
});
