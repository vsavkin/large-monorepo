import { render } from '@testing-library/react';

import Alert238 from './alert238';

describe('Alert238', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert238 />);
    expect(baseElement).toBeTruthy();
  });
});
