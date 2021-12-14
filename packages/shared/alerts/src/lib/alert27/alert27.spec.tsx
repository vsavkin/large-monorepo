import { render } from '@testing-library/react';

import Alert27 from './alert27';

describe('Alert27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert27 />);
    expect(baseElement).toBeTruthy();
  });
});
