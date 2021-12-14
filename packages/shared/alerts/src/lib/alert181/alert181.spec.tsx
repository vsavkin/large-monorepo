import { render } from '@testing-library/react';

import Alert181 from './alert181';

describe('Alert181', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert181 />);
    expect(baseElement).toBeTruthy();
  });
});
