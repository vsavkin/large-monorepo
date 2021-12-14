import { render } from '@testing-library/react';

import Alert65 from './alert65';

describe('Alert65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert65 />);
    expect(baseElement).toBeTruthy();
  });
});
