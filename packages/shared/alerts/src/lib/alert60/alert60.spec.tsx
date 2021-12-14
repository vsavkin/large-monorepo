import { render } from '@testing-library/react';

import Alert60 from './alert60';

describe('Alert60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert60 />);
    expect(baseElement).toBeTruthy();
  });
});
