import { render } from '@testing-library/react';

import Alert145 from './alert145';

describe('Alert145', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert145 />);
    expect(baseElement).toBeTruthy();
  });
});
