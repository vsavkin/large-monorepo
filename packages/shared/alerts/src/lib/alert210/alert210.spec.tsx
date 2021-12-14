import { render } from '@testing-library/react';

import Alert210 from './alert210';

describe('Alert210', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert210 />);
    expect(baseElement).toBeTruthy();
  });
});
