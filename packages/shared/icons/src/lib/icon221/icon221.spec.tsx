import { render } from '@testing-library/react';

import Icon221 from './icon221';

describe('Icon221', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon221 />);
    expect(baseElement).toBeTruthy();
  });
});
