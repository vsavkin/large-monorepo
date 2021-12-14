import { render } from '@testing-library/react';

import Alert141 from './alert141';

describe('Alert141', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert141 />);
    expect(baseElement).toBeTruthy();
  });
});
