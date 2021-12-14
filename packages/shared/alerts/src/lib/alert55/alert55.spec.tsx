import { render } from '@testing-library/react';

import Alert55 from './alert55';

describe('Alert55', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert55 />);
    expect(baseElement).toBeTruthy();
  });
});
