import { render } from '@testing-library/react';

import Icon247 from './icon247';

describe('Icon247', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon247 />);
    expect(baseElement).toBeTruthy();
  });
});
