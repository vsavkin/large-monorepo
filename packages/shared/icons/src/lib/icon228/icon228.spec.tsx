import { render } from '@testing-library/react';

import Icon228 from './icon228';

describe('Icon228', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon228 />);
    expect(baseElement).toBeTruthy();
  });
});
