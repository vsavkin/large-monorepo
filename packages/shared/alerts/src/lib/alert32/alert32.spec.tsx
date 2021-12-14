import { render } from '@testing-library/react';

import Alert32 from './alert32';

describe('Alert32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert32 />);
    expect(baseElement).toBeTruthy();
  });
});
