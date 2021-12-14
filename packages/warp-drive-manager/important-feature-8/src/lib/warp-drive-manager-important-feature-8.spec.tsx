import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature8 from './warp-drive-manager-important-feature-8';

describe('WarpDriveManagerImportantFeature8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature8 />);
    expect(baseElement).toBeTruthy();
  });
});
