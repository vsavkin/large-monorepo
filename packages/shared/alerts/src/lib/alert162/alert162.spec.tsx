import { render } from '@testing-library/react';

import Alert162 from './alert162';

describe('Alert162', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert162 />);
    expect(baseElement).toBeTruthy();
  });
});
