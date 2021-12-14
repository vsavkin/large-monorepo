import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature2 from './warp-drive-manager-important-feature-2';

describe('WarpDriveManagerImportantFeature2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature2 />);
    expect(baseElement).toBeTruthy();
  });
});
