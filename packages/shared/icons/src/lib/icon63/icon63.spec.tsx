import { render } from '@testing-library/react';

import Icon63 from './icon63';

describe('Icon63', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon63 />);
    expect(baseElement).toBeTruthy();
  });
});
