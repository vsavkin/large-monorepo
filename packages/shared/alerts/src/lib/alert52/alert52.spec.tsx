import { render } from '@testing-library/react';

import Alert52 from './alert52';

describe('Alert52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert52 />);
    expect(baseElement).toBeTruthy();
  });
});
