import { render } from '@testing-library/react';

import Alert21 from './alert21';

describe('Alert21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert21 />);
    expect(baseElement).toBeTruthy();
  });
});
