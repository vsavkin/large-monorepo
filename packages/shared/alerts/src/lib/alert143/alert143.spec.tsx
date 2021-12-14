import { render } from '@testing-library/react';

import Alert143 from './alert143';

describe('Alert143', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert143 />);
    expect(baseElement).toBeTruthy();
  });
});
