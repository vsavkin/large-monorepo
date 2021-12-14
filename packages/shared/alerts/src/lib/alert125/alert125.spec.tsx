import { render } from '@testing-library/react';

import Alert125 from './alert125';

describe('Alert125', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert125 />);
    expect(baseElement).toBeTruthy();
  });
});
