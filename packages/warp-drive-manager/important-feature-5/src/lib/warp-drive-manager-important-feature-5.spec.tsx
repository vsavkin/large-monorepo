import { render } from '@testing-library/react';

import WarpDriveManagerImportantFeature5 from './warp-drive-manager-important-feature-5';

describe('WarpDriveManagerImportantFeature5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarpDriveManagerImportantFeature5 />);
    expect(baseElement).toBeTruthy();
  });
});
