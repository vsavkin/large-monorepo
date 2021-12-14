import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature9 from './warp-drive-manager-important-feature-9';

describe('WarpDriveManagerImportantFeature9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature9 />);
    expect(baseElement).toBeTruthy();
  });
});
