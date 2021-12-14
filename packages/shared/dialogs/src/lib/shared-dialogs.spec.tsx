import { render } from '@testing-library/react';

import SharedDialogs from './shared-dialogs';

describe('SharedDialogs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedDialogs />);
    expect(baseElement).toBeTruthy();
  });
});
