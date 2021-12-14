import { render } from '@testing-library/react';

import Alert155 from './alert155';

describe('Alert155', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert155 />);
    expect(baseElement).toBeTruthy();
  });
});
