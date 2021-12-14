import { render } from '@testing-library/react';

import Alert114 from './alert114';

describe('Alert114', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert114 />);
    expect(baseElement).toBeTruthy();
  });
});
