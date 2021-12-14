import { render } from '@testing-library/react';

import Alert17 from './alert17';

describe('Alert17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert17 />);
    expect(baseElement).toBeTruthy();
  });
});
