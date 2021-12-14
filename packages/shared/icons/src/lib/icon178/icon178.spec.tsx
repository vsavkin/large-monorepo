import { render } from '@testing-library/react';

import Icon178 from './icon178';

describe('Icon178', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon178 />);
    expect(baseElement).toBeTruthy();
  });
});
