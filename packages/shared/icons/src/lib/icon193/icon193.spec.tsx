import { render } from '@testing-library/react';

import Icon193 from './icon193';

describe('Icon193', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon193 />);
    expect(baseElement).toBeTruthy();
  });
});
