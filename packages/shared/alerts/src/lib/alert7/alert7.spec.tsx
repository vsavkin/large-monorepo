import { render } from '@testing-library/react';

import Alert7 from './alert7';

describe('Alert7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert7 />);
    expect(baseElement).toBeTruthy();
  });
});
