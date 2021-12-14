import { render } from '@testing-library/react';

import Icon153 from './icon153';

describe('Icon153', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon153 />);
    expect(baseElement).toBeTruthy();
  });
});
