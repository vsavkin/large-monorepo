import { render } from '@testing-library/react';

import Icon156 from './icon156';

describe('Icon156', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon156 />);
    expect(baseElement).toBeTruthy();
  });
});
