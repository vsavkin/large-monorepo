import { render } from '@testing-library/react';

import Alert171 from './alert171';

describe('Alert171', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert171 />);
    expect(baseElement).toBeTruthy();
  });
});
