import { render } from '@testing-library/react';

import Alert115 from './alert115';

describe('Alert115', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert115 />);
    expect(baseElement).toBeTruthy();
  });
});
