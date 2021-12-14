import { render } from '@testing-library/react';

import Alert202 from './alert202';

describe('Alert202', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert202 />);
    expect(baseElement).toBeTruthy();
  });
});
