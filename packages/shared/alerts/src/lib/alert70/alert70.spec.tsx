import { render } from '@testing-library/react';

import Alert70 from './alert70';

describe('Alert70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert70 />);
    expect(baseElement).toBeTruthy();
  });
});
