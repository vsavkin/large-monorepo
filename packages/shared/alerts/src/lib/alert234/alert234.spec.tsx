import { render } from '@testing-library/react';

import Alert234 from './alert234';

describe('Alert234', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert234 />);
    expect(baseElement).toBeTruthy();
  });
});
