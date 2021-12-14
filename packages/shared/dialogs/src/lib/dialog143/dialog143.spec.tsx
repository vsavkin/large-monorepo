import { render } from '@testing-library/react';

import Dialog143 from './dialog143';

describe('Dialog143', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog143 />);
    expect(baseElement).toBeTruthy();
  });
});
