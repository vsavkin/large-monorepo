import { render } from '@testing-library/react';

import Alert177 from './alert177';

describe('Alert177', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert177 />);
    expect(baseElement).toBeTruthy();
  });
});
