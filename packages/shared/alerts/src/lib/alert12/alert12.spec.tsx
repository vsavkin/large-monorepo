import { render } from '@testing-library/react';

import Alert12 from './alert12';

describe('Alert12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert12 />);
    expect(baseElement).toBeTruthy();
  });
});
