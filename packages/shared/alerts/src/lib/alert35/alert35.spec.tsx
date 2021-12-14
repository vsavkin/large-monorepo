import { render } from '@testing-library/react';

import Alert35 from './alert35';

describe('Alert35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert35 />);
    expect(baseElement).toBeTruthy();
  });
});
