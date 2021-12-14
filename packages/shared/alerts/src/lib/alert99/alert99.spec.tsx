import { render } from '@testing-library/react';

import Alert99 from './alert99';

describe('Alert99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert99 />);
    expect(baseElement).toBeTruthy();
  });
});
