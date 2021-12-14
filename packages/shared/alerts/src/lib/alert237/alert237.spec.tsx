import { render } from '@testing-library/react';

import Alert237 from './alert237';

describe('Alert237', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert237 />);
    expect(baseElement).toBeTruthy();
  });
});
