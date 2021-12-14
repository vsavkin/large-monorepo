import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature0 from './warp-drive-manager-important-feature-0';

describe('WarpDriveManagerImportantFeature0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature0 />);
    expect(baseElement).toBeTruthy();
  });
});
