import { render } from '@testing-library/react';

import Alert231 from './alert231';

describe('Alert231', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert231 />);
    expect(baseElement).toBeTruthy();
  });
});
