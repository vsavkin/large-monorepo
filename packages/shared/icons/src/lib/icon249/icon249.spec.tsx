import { render } from '@testing-library/react';

import Icon249 from './icon249';

describe('Icon249', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon249 />);
    expect(baseElement).toBeTruthy();
  });
});
