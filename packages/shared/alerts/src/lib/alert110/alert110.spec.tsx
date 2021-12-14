import { render } from '@testing-library/react';

import Alert110 from './alert110';

describe('Alert110', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert110 />);
    expect(baseElement).toBeTruthy();
  });
});
