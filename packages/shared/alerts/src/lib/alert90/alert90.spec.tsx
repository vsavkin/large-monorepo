import { render } from '@testing-library/react';

import Alert90 from './alert90';

describe('Alert90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert90 />);
    expect(baseElement).toBeTruthy();
  });
});
