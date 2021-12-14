import { render } from '@testing-library/react';

import Alert92 from './alert92';

describe('Alert92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert92 />);
    expect(baseElement).toBeTruthy();
  });
});
