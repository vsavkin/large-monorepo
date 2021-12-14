import { render } from '@testing-library/react';

import Alert228 from './alert228';

describe('Alert228', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert228 />);
    expect(baseElement).toBeTruthy();
  });
});
