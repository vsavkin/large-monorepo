import { render } from '@testing-library/react';

import Dialog130 from './dialog130';

describe('Dialog130', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog130 />);
    expect(baseElement).toBeTruthy();
  });
});
