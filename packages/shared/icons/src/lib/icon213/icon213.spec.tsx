import { render } from '@testing-library/react';

import Icon213 from './icon213';

describe('Icon213', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon213 />);
    expect(baseElement).toBeTruthy();
  });
});
