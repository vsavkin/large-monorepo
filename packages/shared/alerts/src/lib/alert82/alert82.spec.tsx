import { render } from '@testing-library/react';

import Alert82 from './alert82';

describe('Alert82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert82 />);
    expect(baseElement).toBeTruthy();
  });
});
