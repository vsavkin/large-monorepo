import { render } from '@testing-library/react';

import Alert214 from './alert214';

describe('Alert214', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert214 />);
    expect(baseElement).toBeTruthy();
  });
});
