import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature6 from './warp-drive-manager-important-feature-6';

describe('WarpDriveManagerImportantFeature6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature6 />);
    expect(baseElement).toBeTruthy();
  });
});
