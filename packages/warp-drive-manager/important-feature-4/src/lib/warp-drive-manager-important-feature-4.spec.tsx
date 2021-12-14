import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature4 from './warp-drive-manager-important-feature-4';

describe('WarpDriveManagerImportantFeature4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature4 />);
    expect(baseElement).toBeTruthy();
  });
});
