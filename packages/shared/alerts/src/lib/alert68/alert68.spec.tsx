import { render } from '@testing-library/react';

import Alert68 from './alert68';

describe('Alert68', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert68 />);
    expect(baseElement).toBeTruthy();
  });
});
