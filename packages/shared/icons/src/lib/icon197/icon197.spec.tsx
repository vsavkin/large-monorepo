import { render } from '@testing-library/react';

import Icon197 from './icon197';

describe('Icon197', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon197 />);
    expect(baseElement).toBeTruthy();
  });
});
