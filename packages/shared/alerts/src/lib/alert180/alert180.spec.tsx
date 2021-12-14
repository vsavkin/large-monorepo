import { render } from '@testing-library/react';

import Alert180 from './alert180';

describe('Alert180', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert180 />);
    expect(baseElement).toBeTruthy();
  });
});
