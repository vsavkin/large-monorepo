import { render } from '@testing-library/react';

import Alert4 from './alert4';

describe('Alert4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert4 />);
    expect(baseElement).toBeTruthy();
  });
});
