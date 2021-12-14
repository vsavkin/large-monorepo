import { render } from '@testing-library/react';

import Icon242 from './icon242';

describe('Icon242', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon242 />);
    expect(baseElement).toBeTruthy();
  });
});
