import { render } from '@testing-library/react';

import Alert126 from './alert126';

describe('Alert126', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert126 />);
    expect(baseElement).toBeTruthy();
  });
});
