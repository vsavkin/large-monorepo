import { render } from '@testing-library/react';

import Icon128 from './icon128';

describe('Icon128', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon128 />);
    expect(baseElement).toBeTruthy();
  });
});
