import { render } from '@testing-library/react';

import Alert205 from './alert205';

describe('Alert205', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert205 />);
    expect(baseElement).toBeTruthy();
  });
});
