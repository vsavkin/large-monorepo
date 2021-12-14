import { render } from '@testing-library/react';

import Alert26 from './alert26';

describe('Alert26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert26 />);
    expect(baseElement).toBeTruthy();
  });
});
