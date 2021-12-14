import { render } from '@testing-library/react';

import Icon57 from './icon57';

describe('Icon57', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon57 />);
    expect(baseElement).toBeTruthy();
  });
});
