import { render } from '@testing-library/react';

import Icon234 from './icon234';

describe('Icon234', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon234 />);
    expect(baseElement).toBeTruthy();
  });
});
