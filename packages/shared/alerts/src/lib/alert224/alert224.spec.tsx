import { render } from '@testing-library/react';

import Alert224 from './alert224';

describe('Alert224', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert224 />);
    expect(baseElement).toBeTruthy();
  });
});
