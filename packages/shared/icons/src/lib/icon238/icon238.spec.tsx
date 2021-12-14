import { render } from '@testing-library/react';

import Icon238 from './icon238';

describe('Icon238', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon238 />);
    expect(baseElement).toBeTruthy();
  });
});
