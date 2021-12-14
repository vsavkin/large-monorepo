import { render } from '@testing-library/react';

import Alert118 from './alert118';

describe('Alert118', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert118 />);
    expect(baseElement).toBeTruthy();
  });
});
