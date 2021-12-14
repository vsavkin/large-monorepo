import { render } from '@testing-library/react';

import Alert109 from './alert109';

describe('Alert109', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert109 />);
    expect(baseElement).toBeTruthy();
  });
});
