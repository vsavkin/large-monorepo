import { render } from '@testing-library/react';

import Alert88 from './alert88';

describe('Alert88', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert88 />);
    expect(baseElement).toBeTruthy();
  });
});
