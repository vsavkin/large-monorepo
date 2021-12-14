import { render } from '@testing-library/react';

import Icon201 from './icon201';

describe('Icon201', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon201 />);
    expect(baseElement).toBeTruthy();
  });
});
