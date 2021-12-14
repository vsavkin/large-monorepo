import { render } from '@testing-library/react';

import Alert91 from './alert91';

describe('Alert91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert91 />);
    expect(baseElement).toBeTruthy();
  });
});
