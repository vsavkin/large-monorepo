import { render } from '@testing-library/react';

import Alert190 from './alert190';

describe('Alert190', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert190 />);
    expect(baseElement).toBeTruthy();
  });
});
