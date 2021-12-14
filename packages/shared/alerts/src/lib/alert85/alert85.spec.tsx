import { render } from '@testing-library/react';

import Alert85 from './alert85';

describe('Alert85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert85 />);
    expect(baseElement).toBeTruthy();
  });
});
