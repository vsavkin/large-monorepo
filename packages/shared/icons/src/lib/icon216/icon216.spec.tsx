import { render } from '@testing-library/react';

import Icon216 from './icon216';

describe('Icon216', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon216 />);
    expect(baseElement).toBeTruthy();
  });
});
